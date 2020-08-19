import React from 'react';
import * as langs from '../../../constants/admincp/languages';
import {useHistory} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
function NewBlockText2(props) {
    const {BlockText2} = props;
    const history = useHistory();
    const handleRedirect = () => {
        history.push(BlockText2.LinkRequest);
    }


    const renderText = () => {
        return (
            <div className="wrapper">
                <h2>{BlockText2.GroupTitle}</h2>
                <p>{BlockText2.Description}</p>
                <span className="btn btn-more" onClick={handleRedirect} >{langs.view_more}</span>
            </div>
        )
    }

    const renderTextLoading = () => {
        return (
            <div className="wrapper">
                <h2><Skeleton variant="text" width={400} /></h2>
                <p><Skeleton variant="text" width={600} /></p>
                <p><Skeleton variant="text" width={300} /></p>
                <span className="btn btn-more" ></span>
            </div>
        )
    }
    return (
        <section className="phanam-home-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {BlockText2.GroupTitle !== undefined ? renderText() : renderTextLoading()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewBlockText2;
