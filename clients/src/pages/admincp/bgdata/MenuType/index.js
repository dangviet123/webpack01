import React,{useState, useEffect} from 'react';
import loadable from '@loadable/component';
import { useDispatch,useSelector } from 'react-redux';
import {showModalDialogs} from '../../../../actions/admincp/ModalDialogs';
import { ac_fetchMenuType,ac_addMenuType,ac_editMenuType,ac_activeOneMenuType,ac_activeAllMenuType,ac_deleteAllMenuType, ac_checkedOne, ac_checkedAll } from '../../../../actions/admincp/bgdata/MenuType';
import { useLocation,useHistory } from 'react-router-dom';
import { toastWarning } from '../../../../helpers/toastHelper';
import {showConfirmAlert} from '../../../../actions/admincp/ModalDialogs';
import {showSearch} from '../../../../actions/login/login';
import * as langs from '../../../../constants/admincp/languages';
const CreatNew = loadable(() => import('./../../../../components/admincp/bgdata/TypeMenu/add'));
const ModalDialogs = loadable(() => import('../../../../components/admincp/Shared/ModalDialogs'));
const Search = loadable(() => import('./../../../../components/admincp/bgdata/TypeMenu/Search'));
const ListTable = loadable(() => import('./../../../../components/admincp/bgdata/TypeMenu/ListTable'));
const UpdateMenuType = loadable(() => import('./../../../../components/admincp/bgdata/TypeMenu/edit'));
const ControlPanelbutton = loadable(() => import('./../../../../components/admincp/Shared/ControlPanelbutton'));
const PaginationCustom = loadable(() => import('../../../../components/admincp/Shared/PaginationCustom'));
const ConfirmAlert = loadable(() => import('../../../../helpers/FormConfirm/ConfirmAlert'));
function MenuType() {
    const [checkAll,setCheckAll] = useState(false); 
    const dispatch = useDispatch();
    const {search} = useLocation();
    const history = useHistory();
    useEffect(() => {
        document.title = langs.menu_type;
        dispatch(showSearch(false));
    },[dispatch]);

    useEffect(() => {
        dispatch(ac_fetchMenuType());
    },[search,dispatch]);


    const {datas,current_page,last_page,total} = useSelector(state => state.MenuType);
    const filterSerach = () => {
        dispatch(showSearch(true));
    };
    const handleCloseSearch = () => {
        dispatch(showSearch(false));
    };
    const reloadPage = () => {
        dispatch(ac_fetchMenuType());
    }
    const createdNew = () => { // mở form thêm mới
        dispatch(showModalDialogs(true,'sm',langs.add_new,<CreatNew addMenuType={addMenuType} />));
    };

    const createdNewMenu = () => {
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length === 1) {
            const {idTypeMenu} = listcheck[0];
            history.push(`/admincp/bgdata/menu-type/${idTypeMenu}/list-menu`);
        }else if (listcheck.length > 1) {
            toastWarning(langs.only_line_is_allowed);
        } else {
            toastWarning(langs.select_at_least_line);
        }
        
    }
    

    const addMenuType = value => { // THÊM MỚI => SAGA
        dispatch(ac_addMenuType(value));
    };

    const handleSetLimitLoad = () => {
        dispatch(ac_fetchMenuType());
    }



    const updatedNew = () => { // mở form thêm mới
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length === 1) {
            const listEdit = listcheck[0];
            dispatch(showModalDialogs(true,'sm',langs.update_new,<UpdateMenuType editMenuType={editMenuType} listEdit={listEdit}  />));
        }else if (listcheck.length > 1) {
            toastWarning(langs.only_line_is_allowed);
        } else {
            toastWarning(langs.select_at_least_line);
        }
    };

    const editMenuType = (idTypeMenu,value) => {
        dispatch(ac_editMenuType(idTypeMenu,value));
    };

    const checkedOne = index => { // checked one row
        dispatch(ac_checkedOne(index));
    }
    const checkedAll = ev => {
        setCheckAll(!checkAll);
        dispatch(ac_checkedAll(!checkAll));
    };

    const activeOne = (idTypeMenu,active) => {
        dispatch(showConfirmAlert(true,{
            Title: langs.NOTIFICATION,
            Text: langs.do_you_want_to_confirm
        },() => {
            dispatch(ac_activeOneMenuType(idTypeMenu,!active));
        }));
        
    }

    const activeAll = value => {
        
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length >= 1) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.do_you_want_to_confirm
            },() => {
                dispatch(ac_activeAllMenuType(listcheck,value));
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
                dispatch(ac_deleteAllMenuType(listcheck));
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
                createdNewMenu={createdNewMenu}
            />
            <Search handleCloseSearch={handleCloseSearch} />
            <ModalDialogs />
            <div className="contentTable">
                <div className="title">
                    <h6 className="title_page">{langs.menu_type}</h6>
                </div>
                
                <ListTable 
                    datas={datas} 
                    checkedOne={checkedOne} 
                    checkedAll={checkedAll} 
                    checkAll={checkAll} 
                    activeOne={activeOne}
                    />
                
                <PaginationCustom count={last_page} total={total} current_page={current_page} last_page={last_page} namepage={langs.menu_type} handleSetLimitLoad={handleSetLimitLoad} />
                
            </div>
        </div>
    )
}
export default MenuType;