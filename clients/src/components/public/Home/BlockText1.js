import React from 'react';
import * as langs from '../../../constants/admincp/languages';
import {useHistory} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
function NewBlockText1(props) {
    const {BlockText1} = props;
    const history = useHistory();
    const handleRedirect = () => {
        history.push(BlockText1.LinkRequest);
    }
    const renderText = () => {
        return (
            <div className="wrapper">
                <h2>{BlockText1.GroupTitle}</h2>
                <p>{BlockText1.Description}</p>
                <span className="btn btn-more" onClick={handleRedirect} >{langs.view_more}</span>
            </div>
        )
    }

    const renderTextLoading = () => {
        return (
            <div className="wrapper">
                <h2><Skeleton variant="text" width={200} /></h2>
                <p><Skeleton variant="text" width={600} /></p>
                <span className="btn btn-more" ></span>
            </div>
        )
    }

    return (
        <section className="phanam-home-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {BlockText1.GroupTitle !== undefined ? renderText() : renderTextLoading()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewBlockText1;
