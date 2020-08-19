import React,{useState, useEffect} from 'react';
import loadable from '@loadable/component';
import { useDispatch,useSelector } from 'react-redux';
import {showModalDialogs} from '../../../../actions/admincp/ModalDialogs';
import { ac_fetchListPermission,
    ac_addListPermission,
    ac_editListPermission,
    ac_activeOneListPermission,
    ac_activeAllListPermission,
    ac_deleteAllListPermission, 
    ac_checkedOne, 
    ac_checkedAll } from '../../../../actions/admincp/dataUsers/ListPermission';
import { useLocation } from 'react-router-dom';
import { toastWarning } from '../../../../helpers/toastHelper';
import {showConfirmAlert} from '../../../../actions/admincp/ModalDialogs';
import {showSearch} from '../../../../actions/login/login';
import * as langs from '../../../../constants/admincp/languages';

const CreatNew = loadable(() => import('./../../../../components/admincp/dataUsers/ListPermission/add'));
const ModalDialogs = loadable(() => import('../../../../components/admincp/Shared/ModalDialogs'));
const Search = loadable(() => import('./../../../../components/admincp/dataUsers/ListPermission/Search'));
const ListTable = loadable(() => import('./../../../../components/admincp/dataUsers/ListPermission/ListTable'));
const UpdateListPermission = loadable(() => import('./../../../../components/admincp/dataUsers/ListPermission/edit'));
const ControlPanelbutton = loadable(() => import('./../../../../components/admincp/Shared/ControlPanelbutton'));
const PaginationCustom = loadable(() => import('../../../../components/admincp/Shared/PaginationCustom'));
const ConfirmAlert = loadable(() => import('../../../../helpers/FormConfirm/ConfirmAlert'));

function ListPermission() {
    const [checkAll,setCheckAll] = useState(false); 
    const dispatch = useDispatch();
    const {search} = useLocation();
    useEffect(() => {
        document.title = langs.list_premission;
        dispatch(showSearch(false));
    },[dispatch]);

    useEffect(() => {
        dispatch(ac_fetchListPermission());
    },[search,dispatch]);


    const {datas,current_page,last_page,total} = useSelector(state => state.ListPermission);
    const filterSerach = () => {
        dispatch(showSearch(true));
    };
    const handleCloseSearch = () => {
        dispatch(showSearch(false));
    };
    const reloadPage = () => {
        dispatch(ac_fetchListPermission());
    }
    const createdNew = () => { // mở form thêm mới
        dispatch(showModalDialogs(true,'sm',langs.add_new,<CreatNew addListPermission={addListPermission} />));
    };
    

    const addListPermission = value => { // THÊM MỚI => SAGA
        dispatch(ac_addListPermission(value));
    };

    const handleSetLimitLoad = () => {
        dispatch(ac_fetchListPermission());
    }



    const updatedNew = () => { // mở form thêm mới
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length === 1) {
            const listEdit = listcheck[0];
            dispatch(showModalDialogs(true,'sm',langs.update_new,<UpdateListPermission editListPermission={editListPermission} listEdit={listEdit}  />));
        }else if (listcheck.length > 1) {
            toastWarning(langs.only_line_is_allowed);
        } else {
            toastWarning(langs.select_at_least_line);
        }
    };

    const editListPermission = (idListPermission,value) => {
        dispatch(ac_editListPermission(idListPermission,value));
    };

    const checkedOne = index => { // checked one row
        dispatch(ac_checkedOne(index));
    }
    const checkedAll = ev => {
        setCheckAll(!checkAll);
        dispatch(ac_checkedAll(!checkAll));
    };

    const activeOne = (idListPermission,active) => {
        dispatch(showConfirmAlert(true,{
            Title: langs.NOTIFICATION,
            Text: langs.do_you_want_to_confirm
        },() => {
            dispatch(ac_activeOneListPermission(idListPermission,!active));
        }));
        
    }

    const activeAll = value => {
        
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length >= 1) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.do_you_want_to_confirm
            },() => {
                dispatch(ac_activeAllListPermission(listcheck,value));
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
                dispatch(ac_deleteAllListPermission(listcheck));
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
                    <h6 className="title_page">{langs.list_premission}</h6>
                </div>
                
                <ListTable 
                    datas={datas} 
                    checkedOne={checkedOne} 
                    checkedAll={checkedAll} 
                    checkAll={checkAll} 
                    activeOne={activeOne}
                />
                
                <PaginationCustom count={last_page} total={total} current_page={current_page} last_page={last_page} namepage={langs.list_premission} handleSetLimitLoad={handleSetLimitLoad} />
                
            </div>
        </div>
    )
}
export default ListPermission;