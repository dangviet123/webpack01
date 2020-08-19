import React,{useEffect} from 'react';
import * as langs from '../../../../constants/admincp/languages';
import { Button, Tooltip, Icon} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {ac_getMenu, 
    ac_activeMenu,
    ac_loadPermission
} from '../../../../actions/admincp/dataUsers/Groups';
import { useRouteMatch } from 'react-router-dom';
import Nestable from 'react-nestable';
import AddPermission from './AddPermission';
import {showModalDialogs, showConfirmAlert} from '../../../../actions/admincp/ModalDialogs';
import ModalDialogs from '../../Shared/ModalDialogs';
import Switch from "react-switch";
import ConfirmAlert from '../../../../helpers/FormConfirm/ConfirmAlert';
function ListMenu() {
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const {params} = match;
    const {idGroups,idTypeMenu} = params;
    useEffect(() => {
        dispatch(ac_getMenu(idGroups,idTypeMenu));
    }, [idGroups,idTypeMenu,dispatch]);
    const datas = useSelector(state => state.GroupListMenu.datas.data);
    const GroupsName = useSelector(state => state.GroupListMenu.datas.GroupsName);

    const handleAddPermission = (idMenu) => {
        dispatch(ac_loadPermission(idMenu,idGroups));
        dispatch(showModalDialogs(true,'sm',langs.list_premission,<AddPermission  idGroups={idGroups} idMenu={idMenu} idTypeMenu={idTypeMenu} />));
    }


    const activeMenu = (Active,idMenu) => {
        dispatch(showConfirmAlert(true,{
            Title: langs.NOTIFICATION,
            Text: langs.do_you_want_to_confirm
        },() => {
            dispatch(ac_activeMenu({idGroups,Active,idMenu,idTypeMenu}));
        }));
    }


    const handelRefresh = () => {
        dispatch(ac_getMenu(idGroups,idTypeMenu));
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
                </div>
            </div>
            <div className="contentTable">
            <ConfirmAlert />
                <div className="title">
                    <h6 className="title_page">{langs.group_name} : {GroupsName}</h6>
                </div>
                <div className="table_wp">
                    <Nestable
                        items={datas}
                        renderItem={renderItem}
                        confirmChange={() => false}
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default ListMenu;
