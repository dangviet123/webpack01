import React from 'react';
import Card from '@material-ui/core/Card';
import useStyles from './styles';
import CheckIcon from '@material-ui/icons/Check';
import { Table, TableHead, TableRow, TableCell, TableBody, Tooltip, Divider } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import * as langs from '../../../../constants/admincp/languages';
import ClearIcon from '@material-ui/icons/Clear';
import Skeleton from '@material-ui/lab/Skeleton';
function ChartPosts(props) {
    const {LitstCompany} = props;
    const classes = useStyles();
    const renderListConpany = () => {
        let xhtml = null;
        xhtml = LitstCompany.map((company,index) => {
            return (
                <TableRow hover key={index}>
                    <TableCell align="center">{index+1}</TableCell>
                    <TableCell >{company.IDCode}</TableCell>
                    <TableCell style={{textTransform: 'uppercase'}} >{company.Description}</TableCell>
                    <TableCell align="center">
                        <Tooltip title={company.Active === 1 ? langs.activate : langs.inactive} placement="left"  arrow>
                            <Fab size="small" color="secondary" style={{backgroundColor: '#03aec3'}}>
                                {company.Active === 1 ? <CheckIcon /> : <ClearIcon /> } 
                            </Fab>
                        </Tooltip>
                    </TableCell>
                </TableRow>
            )
        });
        return xhtml;
    }

    const renderLoading = () => {
        let xhtml = [];
        for (let i = 0; i < 8; i++) {
            xhtml.push(
                <TableRow key={i}>
                    <TableCell align="center"><Skeleton  height={40} /></TableCell>
                    <TableCell ><Skeleton  height={40} /></TableCell>
                    <TableCell ><Skeleton  height={40} /></TableCell>
                    <TableCell align="center"><Skeleton  height={40} /></TableCell>
                </TableRow>
            );
        }
        return xhtml;
    };
    return (
        <Card variant="outlined" className={classes.card}>
            <h5 className={classes.card_title}>{langs.COMPANY_BRANCHES}</h5>
            <Divider />
            <Table className={classes.table_post} >
                <TableHead>
                    <TableRow>
                        <TableCell align="center" width={80} className={classes.posts_title}>STT</TableCell>
                        <TableCell className={classes.posts_title}>{langs.code}</TableCell>
                        <TableCell  className={classes.posts_title}>{langs.company}</TableCell>
                        <TableCell align="center" width={100} className={classes.posts_title}>{langs.status}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {LitstCompany.length > 0 ?  renderListConpany() : renderLoading()}
                </TableBody>
            </Table>
        </Card>
    )
}
export default ChartPosts;
