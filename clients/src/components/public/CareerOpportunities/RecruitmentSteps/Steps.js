import React from 'react';
import { link_home } from '../../../../constants/admincp/config';
import Skeleton from '@material-ui/lab/Skeleton';
function Steps(props) {
    const {ListSteps} = props;
    const renderSteps = () => {
        let xhtml = null;
        xhtml = ListSteps.map((st,index) => {
            return (
                <div className="col-lg item" key={index}>
                    <figure>
                        <div className="icon"><img src={`${link_home}${st.Image}`} alt={st.StepsTitle} /></div>
                        <figcaption>
                            <h3 className="title">{st.StepsTitle}</h3>
                            <p className="desc">{st.Description}</p>
                        </figcaption>
                    </figure>
                </div>
            )
        })
        return xhtml;
    }
    const renderLoading = () => {
        let xhtml = [];
        for (let i = 0; i < 5; i++) {
            xhtml.push(
                (
                    <div className="col-lg item" key={i}>
                        <figure>
                            <div className="icon" style={{margin: 'auto'}}>
                                <Skeleton width={50} height={50} variant="rect" />
                            </div>
                            <figcaption>
                                <h3 className="title"><Skeleton variant="text" /></h3>
                                <p className="desc">
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                )
            );
            
        }

        return xhtml;
    }
    return (
        <div className="row no-gutters list-item">
            {ListSteps.length > 0 ? renderSteps() : renderLoading()}
        </div>
    )
}
export default Steps;
