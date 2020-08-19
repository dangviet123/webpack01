import React,{useState, useEffect} from 'react';
import loadable from '@loadable/component';
import { useDispatch,useSelector } from 'react-redux';
import { ac_fetchPosts,
    ac_activeOnePosts,
    ac_activeAllPosts,
    ac_deleteAllPosts,
    ac_checkedOne, 
    ac_checkedAll } from '../../../../actions/admincp/contents/Posts';
import { useLocation,useHistory } from 'react-router-dom';
import { toastWarning } from '../../../../helpers/toastHelper';
import {showConfirmAlert} from '../../../../actions/admincp/ModalDialogs';
import {showSearch} from '../../../../actions/login/login';
import * as langs from '../../../../constants/admincp/languages';

const ModalDialogs = loadable(() => import('../../../../components/admincp/Shared/ModalDialogs'));
const Search = loadable(() => import('./../../../../components/admincp/contents/Posts/Search'));
const ListTable = loadable(() => import('./../../../../components/admincp/contents/Posts/ListTable'));
const ControlPanelbutton = loadable(() => import('./../../../../components/admincp/Shared/ControlPanelbutton'));
const PaginationCustom = loadable(() => import('../../../../components/admincp/Shared/PaginationCustom'));
const ConfirmAlert = loadable(() => import('../../../../helpers/FormConfirm/ConfirmAlert'));

function Posts() {
    const [checkAll,setCheckAll] = useState(false); 
    const dispatch = useDispatch();
    const {search} = useLocation();
    const history = useHistory();
    useEffect(() => {
        document.title = langs.posts;
        dispatch(showSearch(false));
    },[dispatch]);

    useEffect(() => {
        dispatch(ac_fetchPosts());
    },[search,dispatch]);


    const {datas,current_page,last_page,total,listCategory} = useSelector(state => state.Posts);
    const filterSerach = () => {
        dispatch(showSearch(true));
    };
    const handleCloseSearch = () => {
        dispatch(showSearch(false));
    };
    const reloadPage = () => {
        dispatch(ac_fetchPosts());
    }
    const createdNew = () => { // mở form thêm mới
        history.push('/admincp/contents/posts/add');
    };
    

    const handleSetLimitLoad = () => {
        dispatch(ac_fetchPosts());
    }



    const updatedNew = () => { // mở form thêm mới
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length === 1) {
            const idPosts = listcheck[0].idPosts;
            history.push(`/admincp/contents/posts/${idPosts}/edit`);
        }else if (listcheck.length > 1) {
            toastWarning(langs.only_line_is_allowed);
        } else {
            toastWarning(langs.select_at_least_line);
        }
    };


    const checkedOne = index => { // checked one row
        dispatch(ac_checkedOne(index));
    }
    const checkedAll = ev => {
        setCheckAll(!checkAll);
        dispatch(ac_checkedAll(!checkAll));
    };

    const activeOne = (idPosts,active) => {
        dispatch(showConfirmAlert(true,{
            Title: langs.NOTIFICATION,
            Text: langs.do_you_want_to_confirm
        },() => {
            dispatch(ac_activeOnePosts(idPosts,!active));
        }));
        
    }

    const activeAll = value => {
        
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length >= 1) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.do_you_want_to_confirm
            },() => {
                dispatch(ac_activeAllPosts(listcheck,value));
            }));
        } else {
            toastWarning(langs.select_at_least_line);
        }
    }

    const deleteAll = () => {
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length >= 1) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.data_will_be_deleted
            },() => {
                dispatch(ac_deleteAllPosts(listcheck));
            }));
        } else {
            toastWarning(langs.select_at_least_line);
        }
    }



    return (
        <div className="fix-relative">
            <ConfirmAlert />
            <ControlPanelbutton 
                filterSerach={filterSerach} 
                createdNew ={createdNew}
                updatedNew={updatedNew}
                activeAll={activeAll}
                deleteAll={deleteAll}
                reloadPage={reloadPage}
            />
            <Search handleCloseSearch={handleCloseSearch} listCategory={listCategory} />
            <ModalDialogs />
            <div className="contentTable">
                <div className="title">
                    <h6 className="title_page">{langs.posts}</h6>
                </div>
                
                <ListTable 
                    datas={datas} 
                    checkedOne={checkedOne} 
                    checkedAll={checkedAll} 
                    checkAll={checkAll} 
                    activeOne={activeOne}
                />
                
                <PaginationCustom count={last_page} total={total} current_page={current_page} last_page={last_page} namepage={langs.posts} handleSetLimitLoad={handleSetLimitLoad} />
                
            </div>
        </div>
    )
}
export default Posts;