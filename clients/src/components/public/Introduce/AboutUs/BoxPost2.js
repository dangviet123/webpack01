import React from 'react';
import {link_event} from '../../../../constants/admincp/config';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import renderHTML from 'react-render-html';
function BoxPost2(props) {
    const {ListPosts} = props;
    const renderBox = () => {
        const forDeletion = [0,3];
        const NewListPost = ListPosts.filter((item,index) => !forDeletion.includes(index));
        let xhtml = null;
        xhtml = NewListPost.map((post,index) => {
            return (
                <div className="wrapper" key={index}>
                    <div className="row no-gutters">
                        <div className="col-lg-8">
                            <div className="img">
                                <LazyLoadImage
                                    src={`${link_event}${post.Image}`}
                                    alt={post.PostsTitle}
                                    width={`100%`}
                                    height={`100%`}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="content">
                                <div className="title">
                                    <h4>{post.PostsTitle}</h4>
                                </div>
                                <div className="desc">
                                    <p>{renderHTML(post.Description)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return xhtml;
    }
    return (
        <section className="phanam-gioithieu1-3">
            <div className="cs-wrapper">
                {ListPosts.length > 0 ? renderBox() : ''}
            </div>
        </section>
    )
}
export default BoxPost2;