import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Moment from 'react-moment';
import 'moment-timezone';
import { Tooltip, IconButton} from '@material-ui/core';
import * as langs from '../../../../constants/admincp/languages';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { checkProcessOneSave } from '../../../../helpers/checkPermission';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import ShowDetail from './ShowDetail';
function ListTable(props) {
    const { datas,checkedOne,checkedAll,checkProcessOne,anchorEl,idShow,handleCloseShowDetail,handleShowDetailClick  } = props;
    
    //check quyềm active
    const  location = useLocation();
    const {pathname} = location;
    const {ListPermision} = useSelector(state => state.SideBar);
    const arrPermission = ListPermision[pathname];
    //end check quyền active

    const renderLitsMenu = () => {
        let xhtml = null;
        xhtml = datas.map((data,index) => {
            const idCheck = `popover-${data.idSupport}`;
            return (
                <TableRow hover key={index}>
                    
                    <TableCell align="center">
                        <Checkbox checkedIcon={<CheckBoxOutlinedIcon />} color="primary" checked={data.checked ? true: false} onChange={() => checkedOne(index)} />
                    </TableCell>
                    <TableCell align="center">
                        <Tooltip title={langs.see_more} placement="right"   arrow>
                            <IconButton 
                                onClick={(event) => handleShowDetailClick(event, idCheck,data.idSupport)}
                                id={idCheck}
                            >
                                <RemoveRedEyeIcon fontSize="small" />
                            </IconButton> 
                        </Tooltip>
                    </TableCell>
                    <TableCell align="center">{data.Support}</TableCell>
                    <TableCell align="center">{data.FullName}</TableCell>
                    <TableCell align="center">{data.Email}</TableCell>
                    <TableCell align="center">{data.Phone}</TableCell>
                    <TableCell align="center"><Moment format="DD-MM-YYYY">{data.DateAdd}</Moment></TableCell>
                    <TableCell align="center">
                        <Tooltip title={data.Active ? langs.active_process : langs.inactive_process} placement="left"  arrow>
                            {checkProcessOneSave(arrPermission) === true ? <IconButton 
                            color={data.Active ? `primary` : `secondary`}  
                            component="span"
                            onClick={() => checkProcessOne(data.idSupport,data.Active)}
                            >
                                {data.Active ? <CheckIcon />: <CloseIcon />} 
                            </IconButton> : <IconButton 
                            color={data.Active ? `primary` : `secondary`}  
                            component="span"
                            >
                                {data.Active ? <CheckIcon />: <CloseIcon />} 
                            </IconButton>}
                            
                        </Tooltip>         
                    </TableCell>
                </TableRow>
            )
        });

        return xhtml;

    }
    return (
        <div className="table_wp">
            <ShowDetail anchorEl={anchorEl} idShow={idShow} handleCloseShowDetail={handleCloseShowDetail} />
            <Table aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell align="center" width={20}>
                            <Checkbox checkedIcon={<CheckBoxOutlinedIcon />} color="primary" onChange={checkedAll} />
                        </TableCell>
                        <TableCell align="center" width={20}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                            >
                                <RemoveRedEyeIcon fontSize="small" />
                            </IconButton>
                        </TableCell>
                        <TableCell align="center">{langs.title}</TableCell>
                        <TableCell align="center" width={200}>{langs.full_name}</TableCell>
                        <TableCell align="center" width={200}>{langs.email_address}</TableCell>
                        <TableCell align="center" width={100}>{langs.phone}</TableCell>
                        <TableCell align="center" width={120}>{langs.date_sent_support}</TableCell>
                        <TableCell align="center" width={80}>{langs.status_process}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderLitsMenu()}
                </TableBody>
            </Table>

        </div>
    )
}
export default ListTable;
