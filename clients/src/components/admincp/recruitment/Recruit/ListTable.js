import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Moment from 'react-moment';
import 'moment-timezone';
import { Tooltip, FormControlLabel, Switch, IconButton, } from '@material-ui/core';
import * as langs from '../../../../constants/admincp/languages';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkActiveOne } from '../../../../helpers/checkPermission';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import ShowDetail from './ShowDetail';
function ListTable(props) {
    const { datas,checkedOne,checkedAll,activeOne,anchorEl,idShow,handleCloseShowDetail,handleShowDetailClick } = props;
    
    //check quyềm active
    const  location = useLocation();
    const {pathname} = location;
    const {ListPermision} = useSelector(state => state.SideBar);
    const arrPermission = ListPermision[pathname];
    //end check quyền active
    
    const renderLitsMenu = () => {
        let xhtml = null;
        xhtml = datas.map((data,index) => {
            const idCheck = `popover-${data.idRecruit}`;
            return (
                <TableRow hover key={index}>
                    <TableCell align="center">
                        <Checkbox checkedIcon={<CheckBoxOutlinedIcon />} color="primary" checked={data.checked ? true: false} onChange={() => checkedOne(index)} />
                    </TableCell>
                    <TableCell align="center">
                        <Tooltip title={langs.see_more} placement="top"   arrow>
                            <IconButton 
                                onClick={(event) => handleShowDetailClick(event, idCheck,data.idRecruit)}
                                id={idCheck}
                            >
                                <RemoveRedEyeIcon fontSize="small" />
                            </IconButton> 
                        </Tooltip>
                    </TableCell>
                    <TableCell align="left">{data.Recruit}</TableCell>
                    <TableCell align="center">{data.GroupArea}</TableCell>
                    <TableCell align="center">{data.Wage}</TableCell>
                    <TableCell align="center"><Moment format="DD-MM-YYYY">{data.Startday}</Moment></TableCell>
                    <TableCell align="center"><Moment format="DD-MM-YYYY">{data.DateFinish}</Moment></TableCell>
                    <TableCell align="center">
                        <Tooltip title={data.Active ? langs.activate : langs.inactive} placement="left" arrow>
                            <FormControlLabel className="switch_nomag"
                                control={<Switch color="primary"   checked={data.Active ? true: false}  onChange={() => activeOne(data.idRecruit,data.Active)}  />}
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
            <ShowDetail anchorEl={anchorEl} idShow={idShow} handleCloseShowDetail={handleCloseShowDetail} />
            <Table aria-label="simple table" >
                <TableHead>
                <TableRow>
                    <TableCell align="center" width={20}>
                        <Checkbox checkedIcon={<CheckBoxOutlinedIcon />} color="primary" onChange={checkedAll} />
                    </TableCell>
                    <TableCell align="center" width={80}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                        >
                            <RemoveRedEyeIcon fontSize="small" />
                        </IconButton>
                    </TableCell>
                    <TableCell align="left">{langs.title}</TableCell>
                    <TableCell align="center" width={200}>{langs.job_posting_area}</TableCell>
                    <TableCell align="center" width={200}>{langs.wage}</TableCell>
                    <TableCell align="center" width={100}>{langs.date_from}</TableCell>
                    <TableCell align="center" width={100}>{langs.date_to}</TableCell>
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
