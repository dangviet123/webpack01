import React,{useEffect} from 'react';
import * as langs from '../../../../constants/admincp/languages';
import { Button, Tooltip, Icon} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {ac_getMenu, 
    ac_editMenu, 
    ac_activeMenu,
    ac_deletteMenu,
    ac_changeMenu,
    ac_loadPermission
} from '../../../../actions/admincp/bgdata/MenuType';
import { useRouteMatch } from 'react-router-dom';
import Nestable from 'react-nestable';
import {showModalDialogs, showConfirmAlert} from '../../../../actions/admincp/ModalDialogs';
import {ac_addMenu} from '../../../../actions/admincp/bgdata/MenuType';
import Switch from "react-switch";
import { toastWarning } from '../../../../helpers/toastHelper';
const ListMenuAdd = React.lazy(() => import('./ListMenuAdd'));
const AddPermission = React.lazy(() => import('./addPermission'));
const ModalDialogs = React.lazy(() => import('../../Shared/ModalDialogs'));
const ListMenuEdit = React.lazy(() => import('./ListMenuEdit'));
const ConfirmAlert = React.lazy(() => import('../../../../helpers/FormConfirm/ConfirmAlert'));
function ListMenu() {
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const {params} = match;
    const {idTypeMenu} = params;
    useEffect(() => {
        dispatch(ac_getMenu(idTypeMenu));
    }, [idTypeMenu,dispatch]);
    const datas = useSelector(state => state.ListMenu.datas.data);
    const TypeMenuName = useSelector(state => state.ListMenu.datas.TypeMenuName);
    const createMenu = () => {
        dispatch(showModalDialogs(true,'sm',langs.add_new,<ListMenuAdd addMenu={addMenu} idTypeMenu={idTypeMenu} />));
    }
    const updateMenu = (item) => {
        dispatch(showModalDialogs(true,'sm',langs.update_new,<ListMenuEdit editMenu={editMenu} idTypeMenu={idTypeMenu} item={item} />));
    }
    const handleAddPermission = (idMenu) => {
        dispatch(ac_loadPermission(idMenu));
        dispatch(showModalDialogs(true,'sm',langs.list_premission,<AddPermission  idTypeMenu={idTypeMenu} idMenu={idMenu} />));
    }
    const addMenu = value => {
        dispatch(ac_addMenu(value));
    }
    const editMenu = value => {
        dispatch(ac_editMenu(value));
    }

    const activeMenu = (Active,idMenu) => {
        dispatch(showConfirmAlert(true,{
            Title: langs.NOTIFICATION,
            Text: langs.do_you_want_to_confirm
        },() => {
            dispatch(ac_activeMenu({idTypeMenu,Active,idMenu}));
        }));
    }

    const deleteMenu = (item) => {
        const {children,idTypeMenu,idMenu} = item;
        if (children.length > 0) {
            toastWarning(langs.delete_children);
        }else{
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.data_will_be_deleted
            },() => {
                dispatch(ac_deletteMenu(idMenu,idTypeMenu));
            }));
            
        }
    }

    const handelRefresh = () => {
        dispatch(ac_getMenu(idTypeMenu));
    }

    const handleChangeMenu = (data) => { // chỉnh menu
        dispatch(ac_changeMenu(data));
    }

    const renderIconPermission = Permission => {
        let xhtml = null;
        if (Permission.length > 0) {
            xhtml = Permission.map((per,index) => {
                return (
                    <span key={index} title={per.ListPermissionName}>
                        <i className={per.Icon} />
                    </span>
                )
            });
        }
        return xhtml;
    }

    const renderItem = ({ item }) => {
        return (
            <div>
               <div className="list-menu">
                    
                    <div className="title-list">
                        <span><i className={item.Icon}></i></span>
                        <span>{item.MenuName}</span>
                    </div>
                    
                    <div className={`list-permision`}>
                        <div>{renderIconPermission(item.Permission)}</div>
                    </div>

                    <div className="list-menu-control">
                        <span className="iconPanel-menu ic_per" onClick={() => handleAddPermission(item.idMenu)}><i className={`fa fa-book`}></i>Quyền</span>
                        <span className="iconPanel-menu ic_edit" onClick={() => updateMenu(item)}><i className={`fa fa-pencil`}></i>{langs.update_new}</span>
                        <span className="iconPanel-menu ic_delete" onClick={() => deleteMenu(item)}><i className={`fa fa-eraser`}></i> {langs.deleted}</span>
                        <Switch title={`121`} onChange={() => activeMenu(!item.Active,item.idMenu)} checked={item.Active ? true: false} height={18} width={40} onColor={`#006ab6`} />
                        
                    </div>
                </div>
            </div>
        )
    };
    return (
        <div>
            <ModalDialogs />
            <div className="panel_control">
                <div>
                    <Tooltip title={langs.refresh} arrow>
                        <Button variant="contained" size="small"   className="iconPanel" onClick={handelRefresh} >
                            <Icon >cached</Icon>
                        </Button>
                    </Tooltip>
                    <Tooltip title={langs.add_new} arrow>
                        <Button variant="contained" size="small" className="iconPanel" onClick={createMenu} >
                            <Icon >add_rounded</Icon>
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <div className="contentTable">
            <ConfirmAlert />
                <div className="title">
                    <h6 className="title_page">{langs.category} : {TypeMenuName}</h6>
                </div>
                <div className="table_wp">
                    <Nestable
                        items={datas}
                        renderItem={renderItem}
                        confirmChange={() => true}
                        onChange={(data) => handleChangeMenu(data)}
                    />
                </div>
            </div>
        </div>
    )
}

export default ListMenu;
