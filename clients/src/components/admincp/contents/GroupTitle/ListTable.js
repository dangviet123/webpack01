import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Moment from 'react-moment';
import 'moment-timezone';
import { Tooltip, FormControlLabel, Switch } from '@material-ui/core';
import * as langs from '../../../../constants/admincp/languages';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkActiveOne } from '../../../../helpers/checkPermission';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
function ListTable(props) {
    const { datas,checkedOne,checkedAll,activeOne } = props;
    
    //check quyềm active
    const  location = useLocation();
    const {pathname} = location;
    const {ListPermision} = useSelector(state => state.SideBar);
    const arrPermission = ListPermision[pathname];
    //end check quyền active
    
    const renderLitsMenu = () => {
        let xhtml = null;
        xhtml = datas.map((data,index) => {
            return (
                <TableRow hover key={index}>
                    
                    <TableCell align="center">
                        <Checkbox 
                        color="primary" 
                        checkedIcon={<CheckBoxOutlinedIcon />}
                        checked={data.checked ? true: false} onChange={() => checkedOne(index)} />
                    </TableCell>
                    <TableCell align="center">{data.GroupTitle}</TableCell>
                    <TableCell align="center">{data.MenuName}</TableCell>

                    <TableCell align="left">{data.LinkRequest}</TableCell>
                    <TableCell align="center">{data.full_name}</TableCell>
                    <TableCell align="center"><Moment format="DD-MM-YYYY">{data.created_at}</Moment></TableCell>
                    <TableCell align="center">
                        <Tooltip title={data.Active ? langs.activate : langs.inactive} placement="left" arrow>
                            <FormControlLabel className="switch_nomag"
                                control={<Switch color="primary"  checked={data.Active ? true: false}  onChange={() => activeOne(data.idGroupTitle,data.Active)}  />}
                                disabled={checkActiveOne(arrPermission)}
                            />
                        </Tooltip>         
                    </TableCell>
                </TableRow>
            )
        });
        return xhtml;
    }
    return (
        <div className="table_wp">
            <Table aria-label="simple table" >
                <TableHead>
                <TableRow>
                    <TableCell align="center" width={20}>
                        <Checkbox color="primary" onChange={checkedAll}  checkedIcon={<CheckBoxOutlinedIcon />}/>
                    </TableCell>
                    <TableCell align="center" width={200}>{langs.group_title}</TableCell>
                    <TableCell align="center" width={150}>{langs.category}</TableCell>

                    <TableCell align="center" >{langs.link_redirect}</TableCell>
                    <TableCell align="center" width={150}>{langs.user_create}</TableCell>
                    <TableCell align="center" width={100}>{langs.date_create}</TableCell>
                    <TableCell align="center" width={80}>{langs.status}</TableCell>
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
