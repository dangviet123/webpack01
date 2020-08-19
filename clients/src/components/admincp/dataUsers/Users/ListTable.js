import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Moment from 'react-moment';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
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
            const {GroupsName} = data;
            let list_GroupName = '';
            if (data.GroupsName !== null) {
                list_GroupName = GroupsName.split(',').map((x,index) => {
                    return (<Chip style={{marginBottom: 2}} 
                    color="primary" key={index} 
                    label={x} size="small" 
                    deleteIcon={<DoneIcon />} 
                    avatar={<Avatar>{x.charAt(0).toUpperCase()}</Avatar>} />)
                })
            }
            return (
                <TableRow hover key={index}>
                    
                    <TableCell align="center">
                        <Checkbox checkedIcon={<CheckBoxOutlinedIcon />} color="primary" disabled={data.id === 0 ? true : false} checked={data.checked ? true: false} onChange={() => checkedOne(index)} />
                    </TableCell>
                    <TableCell align="center">{data.full_name}</TableCell>
                    <TableCell align="center">{data.username}</TableCell>
                    <TableCell align="center">{data.email}</TableCell>
                    <TableCell align="left">{list_GroupName}</TableCell>
                    <TableCell align="center">{data.gender===1 ? langs.male : langs.female}</TableCell>
                    <TableCell align="center">{data.full_name_add}</TableCell>
                    <TableCell align="center"><Moment format="DD-MM-YYYY">{data.created_at}</Moment></TableCell>
                    <TableCell align="center">
                        <Tooltip title={data.Active===1 ? langs.activate : langs.inactive} placement="left" arrow>
                            <FormControlLabel className="switch_nomag"
                                control={<Switch color="primary" checked={data.Active ? true: false}  onChange={() => activeOne(data.id,data.Active)}  />}
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
                        <Checkbox checkedIcon={<CheckBoxOutlinedIcon />} color="primary" onChange={checkedAll} />
                    </TableCell>
                    <TableCell align="center">{langs.user_name}</TableCell>
                    <TableCell align="center">{langs.account}</TableCell>
                    <TableCell align="center">{langs.email_address}</TableCell>
                    <TableCell align="center" width={160}>{langs.group_permission}</TableCell>
                    <TableCell align="center">{langs.sex}</TableCell>
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
