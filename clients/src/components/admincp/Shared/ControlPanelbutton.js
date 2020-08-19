import React from 'react';
import { Button, Icon, Tooltip } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';
function ControlPanelbutton(props) {
    const {
        filterSerach,
        createdNew,
        updatedNew,
        createdNewMenu,
        activeAll,
        deleteAll,
        reloadPage,
        addGroupPermission,
        exportExcel,
        checkProcessAll,
        showPrint
    } = props;
    
    const  location = useLocation();
    const {pathname} = location;
    const pathname_check = pathname.substr(-1);
    const pathname_new = (pathname_check === '/') ? pathname.substring(0,pathname.length-1) : pathname;
    const {ListPermision,list_icon} = useSelector(state => state.SideBar);
    const arrPermission = ListPermision[pathname_new];
    let idPermission = [];
    if (arrPermission) {
        idPermission = arrPermission.idPermission.map(x => parseInt(x));
        
    }

    const rederIcon = (id) => {
        if (typeof list_icon[id] !== undefined) {
            return list_icon[id].Icon;
        }
    }

    const renderName = (id) => {
        if (typeof list_icon[id] !== undefined) {
            return list_icon[id].ListPermissionName;
        }
    }
    
    
    return (
        <div className="panel_control">
            <div>
                {idPermission.indexOf(1) !== -1 ? <Tooltip title={renderName(1)} placement="top" arrow>
                    <Button variant="contained" size="small"   className="iconPanel" onClick={reloadPage} style={{color: '#1b5698'}} >
                        <Icon className={rederIcon(1)} fontSize="small" ></Icon>
                    </Button>
                </Tooltip> : ''}
                {idPermission.indexOf(2) !== -1 ? <Tooltip title={renderName(2)} placement="top" arrow>
                    <Button variant="contained" size="small" className="iconPanel"  onClick={createdNew} style={{color: '#1b5698'}}>
                        <Icon className={rederIcon(2)} fontSize="small"></Icon>
                    </Button>
                </Tooltip> : ''}
                {idPermission.indexOf(3) !== -1 ? <Tooltip title={renderName(3)} placement="top" arrow>
                    <Button variant="contained" size="small" className="iconPanel"  onClick={updatedNew} style={{color: '#1b5698'}}>
                        <Icon className={rederIcon(3)} fontSize="small"></Icon>
                    </Button>
                </Tooltip>: ''}
                {idPermission.indexOf(4) !== -1 ? <Tooltip title={renderName(4)} placement="top" arrow>
                    <Button variant="contained" size="small" className="iconPanel"   onClick={deleteAll} style={{color: '#1b5698'}}>
                        <Icon className={rederIcon(4)} fontSize="small"></Icon>
                    </Button>
                </Tooltip> : ''}
                {idPermission.indexOf(5) !== -1 ? <Tooltip title={renderName(5)} placement="top" arrow>
                    <Button variant="contained" size="small" className="iconPanel"  onClick={() => activeAll(true)} style={{color: '#1b5698'}}>
                        <Icon className={rederIcon(5)} fontSize="small"></Icon>
                    </Button>
                </Tooltip>: ''}
                {idPermission.indexOf(6) !== -1 ? <Tooltip title={renderName(6)} placement="top" arrow>
                    <Button variant="contained" size="small" className="iconPanel"  onClick={() => activeAll(false)} style={{color: '#1b5698'}}>
                       <Icon className={rederIcon(6)} fontSize="small"></Icon>
                    </Button>
                </Tooltip>: ''}
                {idPermission.indexOf(7) !== -1 ? <Tooltip title={renderName(7)} placement="top" arrow>
                    <Button variant="contained" size="small" className="iconPanel"  onClick={createdNewMenu} style={{color: '#1b5698'}}>
                        <Icon className={rederIcon(7)} fontSize="small"></Icon>
                    </Button> 
                </Tooltip>: ''}
                {idPermission.indexOf(8) !== -1 ? <Tooltip title={renderName(8)} placement="top" arrow>
                    <Button variant="contained" size="small" className="iconPanel"  onClick={addGroupPermission} style={{color: '#1b5698'}}>
                        <Icon className={rederIcon(8)} fontSize="small"></Icon>
                    </Button> 
                </Tooltip>: ''}
                {idPermission.indexOf(9) !== -1 ? <Tooltip title={renderName(9)} placement="top" arrow>
                    <Button variant="contained" size="small" className="iconPanel" style={{color: '#1b5698'}} onClick={checkProcessAll}>
                        <Icon className={rederIcon(9)} fontSize="small"></Icon>
                    </Button> 
                </Tooltip>: ''}
                {idPermission.indexOf(10) !== -1 ? <Tooltip title={renderName(10)} placement="top" arrow>
                    <Button variant="contained" size="small" className="iconPanel"  style={{color: '#1b5698'}} onClick={showPrint} >
                        <Icon className={rederIcon(10)} fontSize="small"></Icon>
                    </Button> 
                </Tooltip>: ''}
                {idPermission.indexOf(11) !== -1 ? <Tooltip title={renderName(11)} placement="top" arrow>
                    <Button variant="contained" size="small" className="iconPanel"  style={{color: '#1b5698'}} onClick={exportExcel} >
                        <Icon className={rederIcon(11)} fontSize="small"></Icon>
                    </Button> 
                </Tooltip>: ''}
                {idPermission.indexOf(12) !== -1 ? <Tooltip title={renderName(12)} placement="top" arrow>
                    <Button variant="contained" size="small" className="iconPanel" onClick={filterSerach} style={{color: '#1b5698'}} >
                        <Icon className={rederIcon(12)} fontSize="small"></Icon>
                    </Button> 
                </Tooltip>: ''}
            </div>
        </div>
    )
}
export default ControlPanelbutton;
