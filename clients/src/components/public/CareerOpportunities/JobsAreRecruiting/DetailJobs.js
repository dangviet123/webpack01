import React, { Fragment } from 'react';
import Moment from 'react-moment';
import renderHTML from 'react-render-html';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Fab } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import Skeleton from '@material-ui/lab/Skeleton';
function DetailJobs(props) {
    const { Detail,handleShowForm } = props;
    const renderDetailLoading = () => {
        return (
            <Fragment>
                <div className="title">
                <h2><Skeleton variant="text" /></h2>
                </div>
                <div className="time">
                    <CalendarTodayIcon style={{ color: '#cecece' }} fontSize="small" />
                    <span>
                        <Skeleton variant="text" width={50} />
                    </span>
                </div>
                <div className="content">
                    <p><Skeleton variant="text" width={100} /></p>
                    <p><Skeleton variant="text" width={300} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={300} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={300} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                    <p><Skeleton variant="text" width={`100%`} /></p>
                </div>
                <div className="more">
                    
                </div>
            </Fragment>
        )
    }

    const renderDetail = () => {
        return (
            <Fragment>
                <div className="title">
                <h2>{Detail.Recruit}</h2>
                </div>
                <div className="time">
                    <CalendarTodayIcon style={{ color: '#cecece' }} fontSize="small" />
                    <span>
                        <Moment format="DD-MM-YYYY">{Detail.DateFinish}</Moment>
                    </span>
                </div>
                <div className="content">
                    {Detail.Content !== undefined ? renderHTML(Detail.Content) : ''}
                </div>
                <div className="more">
                <Fab
                    onClick={() => handleShowForm(Detail.idRecruit)}
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="add"
                    >
                    <NavigationIcon />
                    NỘP HỒ SƠ
                    </Fab>
                    
                </div>
            </Fragment>
        )
    }
    return (
        <div className="col-lg-7 tuyen-dung-detail">
            {Detail.Recruit !== undefined ? renderDetail() : renderDetailLoading()}
        </div>
    )
}
export default DetailJobs;
