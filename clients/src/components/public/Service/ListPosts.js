import React from 'react';
import {link_event} from '../../../constants/admincp/config';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {useHistory} from 'react-router-dom';
import renderHTML from 'react-render-html';
function BoxListPosts(props) {
    const {ListPosts} = props;
    const history = useHistory();
    const {pathname} = history.location;
    const handleRedirect = (Slug) => {
        history.push(`${pathname}/${Slug}`);
    }


    const renderBox = () => {
        let xhtml = null;
        xhtml = ListPosts.map((post,index) => {
            return (
                <div className="wrapper" key={index}>
                    <div className="row no-gutters">
                        <div className="col-lg-4">
                            <div className="content">
                                <div className="title" onClick={() => handleRedirect(post.Slug)} style={{cursor: 'pointer'}}>
                                    <h4>{post.PostsTitle}</h4>
                                </div>
                                <div className="desc">
                                    <p>{renderHTML(post.Description)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="img" onClick={() => handleRedirect(post.Slug)} style={{cursor: 'pointer'}}>
                                <LazyLoadImage
                                        src={`${link_event}${post.Image}`}
                                        alt={post.PostsTitle}
                                        height={`100%`}
                                        width={`100%`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return xhtml;
    }

    return (
        <section className="dichvu-2">
            {ListPosts.length > 0 ? renderBox() : ''}
        </section>
    )
}

export default BoxListPosts;
