import React,{useState, useEffect} from 'react';
import loadable from '@loadable/component';
import { useDispatch,useSelector } from 'react-redux';
import { ac_fetchGroupTitle,
    ac_addGroupTitle,
    ac_editGroupTitle,
    ac_activeOneGroupTitle,
    ac_activeAllGroupTitle,
    ac_deleteAllGroupTitle, 
    ac_checkedOne, 
    ac_checkedAll } from '../../../../actions/admincp/contents/GroupTitle';
import { useLocation } from 'react-router-dom';
import { toastWarning } from '../../../../helpers/toastHelper';
import {showConfirmAlert, showModalDialogs} from '../../../../actions/admincp/ModalDialogs';
import {showSearch} from '../../../../actions/login/login';
import * as langs from '../../../../constants/admincp/languages';
import {ac_getListCategory}  from '../../../../actions/admincp/bgdata/MenuType';

const CreatNew = loadable(() => import('./../../../../components/admincp/contents/GroupTitle/Add'));
const ModalDialogs = loadable(() => import('../../../../components/admincp/Shared/ModalDialogs'));
const Search = loadable(() => import('./../../../../components/admincp/contents/GroupTitle/Search'));
const ListTable = loadable(() => import('./../../../../components/admincp/contents/GroupTitle/ListTable'));
const UpdateNew = loadable(() => import('./../../../../components/admincp/contents/GroupTitle/Edit'));
const ControlPanelbutton = loadable(() => import('./../../../../components/admincp/Shared/ControlPanelbutton'));
const PaginationCustom = loadable(() => import('../../../../components/admincp/Shared/PaginationCustom'));
const ConfirmAlert = loadable(() => import('../../../../helpers/FormConfirm/ConfirmAlert'));

function GroupTitle() {
    const [checkAll,setCheckAll] = useState(false); 
    const dispatch = useDispatch();
    const {search} = useLocation();
    useEffect(() => {
        document.title = langs.group_title;
        dispatch(showSearch(false));
    },[dispatch]);

    useEffect(() => {
        dispatch(ac_fetchGroupTitle());
    },[search,dispatch]);


    const {datas,current_page,last_page,total} = useSelector(state => state.GroupTitle);
    const filterSerach = () => {
        dispatch(showSearch(true));
    };
    const handleCloseSearch = () => {
        dispatch(showSearch(false));
    };
    const reloadPage = () => {
        dispatch(ac_fetchGroupTitle());
    }
    

    const createdNew = () => { // mở form thêm mới
        
        dispatch(ac_getListCategory(2));
        dispatch(showModalDialogs(true,'sm',langs.add_new,<CreatNew addGroupTitle={addGroupTitle} />));
    };
    

    const addGroupTitle = value => { // THÊM MỚI => SAGA
        dispatch(ac_addGroupTitle(value));
    };

    const handleSetLimitLoad = () => {
        dispatch(ac_fetchGroupTitle());
    }


    const updatedNew = () => { // mở form thêm mới
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length === 1) {
            const listEdit = listcheck[0];
            dispatch(ac_getListCategory(2));
            dispatch(showModalDialogs(true,'sm',langs.update_new,<UpdateNew editGroupTitle={editGroupTitle} listEdit={listEdit}   />));
        }else if (listcheck.length > 1) {
            toastWarning(langs.only_line_is_allowed);
        } else {
            toastWarning(langs.select_at_least_line);
        }
    };

    const editGroupTitle = (idGroupTitle,value) => {
        dispatch(ac_editGroupTitle(idGroupTitle,value));
    };

    const checkedOne = index => { // checked one row
        dispatch(ac_checkedOne(index));
    }
    const checkedAll = ev => {
        setCheckAll(!checkAll);
        dispatch(ac_checkedAll(!checkAll));
    };

    const activeOne = (idGroupTitle,active) => {
        dispatch(showConfirmAlert(true,{
            Title: langs.NOTIFICATION,
            Text: langs.do_you_want_to_confirm
        },() => {
            dispatch(ac_activeOneGroupTitle(idGroupTitle,!active));
        }));
        
    }

    const activeAll = value => {
        
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length >= 1) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.do_you_want_to_confirm
            },() => {
                dispatch(ac_activeAllGroupTitle(listcheck,value));
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
                dispatch(ac_deleteAllGroupTitle(listcheck));
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
            <Search handleCloseSearch={handleCloseSearch} />
            <ModalDialogs />
            <div className="contentTable">
                <div className="title">
                    <h6 className="title_page">{langs.group_title}</h6>
                </div>
                
                <ListTable 
                    datas={datas} 
                    checkedOne={checkedOne} 
                    checkedAll={checkedAll} 
                    checkAll={checkAll} 
                    activeOne={activeOne}
                />
                
                <PaginationCustom count={last_page} total={total} current_page={current_page} last_page={last_page} namepage={langs.group_title} handleSetLimitLoad={handleSetLimitLoad} />
                
            </div>
        </div>
    )
}
export default GroupTitle;