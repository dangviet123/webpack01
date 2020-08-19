import React,{useState, useEffect} from 'react';
import loadable from '@loadable/component';
import { useDispatch,useSelector } from 'react-redux';
import { ac_fetchSteps,
    ac_activeOneSteps,
    ac_activeAllSteps,
    ac_deleteAllSteps, 
    ac_checkedOne, 
    ac_checkedAll } from '../../../../actions/admincp/bgdata/Steps';
import { useLocation,useHistory } from 'react-router-dom';
import { toastWarning } from '../../../../helpers/toastHelper';
import {showConfirmAlert, showModalDialogs} from '../../../../actions/admincp/ModalDialogs';
import {showSearch} from '../../../../actions/login/login';
import * as langs from '../../../../constants/admincp/languages';

const ModalDialogs = loadable(() => import('../../../../components/admincp/Shared/ModalDialogs'));
const Search = loadable(() => import('./../../../../components/admincp/bgdata/Steps/Search'));
const ListTable = loadable(() => import('./../../../../components/admincp/bgdata/Steps/ListTable'));
const ControlPanelbutton = loadable(() => import('./../../../../components/admincp/Shared/ControlPanelbutton'));
const PaginationCustom = loadable(() => import('../../../../components/admincp/Shared/PaginationCustom'));
const ConfirmAlert = loadable(() => import('../../../../helpers/FormConfirm/ConfirmAlert'));

const ViewImage = loadable(() => import('../../../../components/admincp/bgdata/Steps/ViewImage'));

function Steps() {

    const [checkAll,setCheckAll] = useState(false); 
    const dispatch = useDispatch();
    const {search} = useLocation();
    const history = useHistory();
    useEffect(() => {
        document.title = langs.recruitment_steps;
        dispatch(showSearch(false));
    },[dispatch]);

    useEffect(() => {
        dispatch(ac_fetchSteps());
    },[search,dispatch]);


    const {datas,current_page,last_page,total} = useSelector(state => state.Steps);
    const filterSerach = () => {
        dispatch(showSearch(true));
    };
    const handleCloseSearch = () => {
        dispatch(showSearch(false));
    };
    const reloadPage = () => {
        dispatch(ac_fetchSteps());
    }
    const createdNew = () => { // mở form thêm mới
        history.push('/admincp/bgdata/steps/add');
    };
    


    const handleSetLimitLoad = () => {
        dispatch(ac_fetchSteps());
    }



    const updatedNew = () => { // mở form thêm mới
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length === 1) {
            const idSteps = listcheck[0].idSteps;
            history.push(`/admincp/bgdata/steps/${idSteps}/edit`);
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

    const activeOne = (idSteps,active) => {
        dispatch(showConfirmAlert(true,{
            Title: langs.NOTIFICATION,
            Text: langs.do_you_want_to_confirm
        },() => {
            dispatch(ac_activeOneSteps(idSteps,!active));
        }));
        
    }

    const activeAll = value => {
        
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length >= 1) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.do_you_want_to_confirm
            },() => {
                dispatch(ac_activeAllSteps(listcheck,value));
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
                dispatch(ac_deleteAllSteps(listcheck));
            }));
        } else {
            toastWarning(langs.select_at_least_line);
        }
    }

    const viewImage = index => {
        const Image = datas[index].Image;
        dispatch(showModalDialogs(true,'xs',langs.picture,<ViewImage Image={Image}  />));
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
                    <h6 className="title_page">{langs.recruitment_steps}</h6>
                </div>
                
                <ListTable 
                    datas={datas} 
                    checkedOne={checkedOne} 
                    checkedAll={checkedAll} 
                    checkAll={checkAll} 
                    activeOne={activeOne}
                    viewImage={viewImage}
                />
                
                <PaginationCustom count={last_page} total={total} current_page={current_page} last_page={last_page} namepage={langs.recruitment_steps} handleSetLimitLoad={handleSetLimitLoad} />
                
            </div>
        </div>
    )
}
export default Steps;