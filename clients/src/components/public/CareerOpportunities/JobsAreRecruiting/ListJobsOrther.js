import React from 'react';
import EventIcon from '@material-ui/icons/Event';
import Moment from 'react-moment';
function ListJobsOrther(props) {
    const { ListOrTher,handleChangeDetail } = props;
    const renderList = () => {
        let xhtml = null;
        xhtml = ListOrTher.map((list, index) => {
            return (
                <div className="item list-other" key={index} onClick={() => handleChangeDetail(list.Slug)} >
                    <p>{list.Recruit}</p>
                    <span className="list-other-grow"></span>
                    <div > 
                        <EventIcon style={{ color: '#cecece' }} fontSize="small" /><span style={{fontWeight: 100,fontSize:12,color: '#cecece'}}><Moment format="DD-MM-YYYY">{list.DateFinish}</Moment></span>
                    </div>
                </div>
            )
        })
        return xhtml;
    }
    return (
        <div className="col-lg-5">
            <div className="other-wrapper">
                <div className="title">
                    <h2>tin tuyển dụng khác</h2>
                </div>
                {ListOrTher.length > 0 ? renderList() : ''}
            </div>
        </div>
    )
}

export default ListJobsOrther;
