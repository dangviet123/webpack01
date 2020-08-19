import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import useStyles from './styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Moment from 'react-moment';
import PanigationJobs from './PanigationJobs';
function TableJobs(props) {
    const {handleGetDetail} = props;
    const classes = useStyles();
    const {ListJobs} = props;
    const {data,current_page,last_page} = ListJobs;
    const handleDetail = (Slug) => {
        handleGetDetail(Slug);
    }
    const renderJobs = () => {
        let xhtml = null;
        xhtml = data.map((job,index) => {
            if (index <= 1) {
                return (
                    <TableRow hover key={index}>
                        <TableCell className={classes.body_cell} >
                            <span className={classes.title}>
                                <span className="title_hover_job" onClick={() => handleDetail(job.Slug)} >{job.Recruit}</span>
                                <span className={classes.title_grow}></span>
                                <Fab color="primary" size="small" variant="extended" style={{height: 26,textTransform: 'capitalize'}}>
                                    <AddIcon fontSize="small" />
                                    Mới
                                </Fab>
                            </span>
                        </TableCell>
                        <TableCell className={classes.body_cell} align="center">{job.GroupArea}</TableCell>
                        <TableCell className={classes.body_cell} align="center">{job.Wage}</TableCell>
                        <TableCell className={classes.body_cell} align="center"><Moment format="DD-MM-YYYY">{job.DateFinish}</Moment></TableCell>
                    </TableRow>
                )
            }else{
                return (
                    <TableRow hover key={index}>
                        <TableCell className={classes.body_cell} >
                            <span className="title_hover_job" onClick={() => handleDetail(job.Slug)}>{job.Recruit}</span>
                        </TableCell>
                        <TableCell className={classes.body_cell} align="center">{job.GroupArea}</TableCell>
                        <TableCell className={classes.body_cell} align="center">{job.Wage}</TableCell>
                        <TableCell className={classes.body_cell} align="center"><Moment format="DD-MM-YYYY">{job.DateFinish}</Moment></TableCell>
                    </TableRow>
                )
            }
        });
        return xhtml;
    }


    return (
        <div className={`${classes.table_jobs} table_menia`}>
            <Table aria-label="simple table" >
                <TableHead className={classes.table_head}>
                    <TableRow>
                        <TableCell align="left" className={classes.table_head_title}>Vị Trí Ứng Tuyển</TableCell>
                        <TableCell align="center" className={classes.table_head_title} width={200}>Địa Điểm Làm Việc</TableCell>
                        <TableCell align="center" className={classes.table_head_title} width={200}>Mức Lương</TableCell>
                        <TableCell align="center" className={classes.table_head_title} width={150}>Hạn Nộp Hồ Sơ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderJobs()}
                </TableBody>
            </Table>
            <PanigationJobs count={last_page} current_page={current_page} last_page={last_page} />
        </div>
    )
}
export default TableJobs;
