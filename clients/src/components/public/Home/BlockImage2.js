import React from 'react';
import {link_event} from '../../../constants/admincp/config';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {useHistory} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
function NewBlockImage2(props) {

    const {BlockImage2} = props;
    const history = useHistory();
    const handleRedirect = (LinkArticle) => {
        history.push(LinkArticle);
    }

    const renderBox = () => {
        let xhtml = null;
        xhtml = BlockImage2.map((post,index) => {
            return (
                <div className="col-lg-3 col-md-6" key={index}>
                    <figure onClick={() => handleRedirect(post.LinkArticle)} style={{cursor: 'pointer'}}>
                        <div className="boxzoom">
                            <LazyLoadImage
                                src={`${link_event}${post.Image}`}
                                alt={post.PostsTitle}
                                height={`100%`}
                                width={`100%`}
                            />
                        </div>
                        <figcaption>
                        <h3>{post.PostsTitle}</h3>
                        <p>{post.Description}</p>
                        </figcaption>
                    </figure>
                </div>
            )
        })
        return xhtml;
    }

    const renderBoxLoading = () => {
        let xhtml = [];
        for (let i = 0; i < 4; i++) {
            xhtml.push((
                <div className="col-lg-3 col-md-6" key={i}>
                    <figure  style={{cursor: 'pointer'}}>
                        <div className="boxzoom">
                            <Skeleton width={`99%`} variant="rect" height={598} />
                        </div>
                    </figure>
                </div>
            ));
        }
        return xhtml;
    }

    return (
        <section className="phanam-home-3">
            <article>
                <div className="row no-gutters">
                    {BlockImage2.length > 0 ? renderBox() : renderBoxLoading()}
                </div>
            </article>
        </section>
    )
}
export default NewBlockImage2;
