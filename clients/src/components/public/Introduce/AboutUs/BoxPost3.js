import React from 'react';
import {link_event} from '../../../../constants/admincp/config';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function BoxPost3(props) {
    const {ListPosts} = props;

    const renderBox = () => {
        return (
            <div className="container">
            <div className="row">
                <div className="col">
                <h2>{ListPosts[0].PostsTitle}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="image-map-container">
                        <LazyLoadImage
                            className="img-fluid"
                            src={`${link_event}${ListPosts[0].Image}`}
                            alt={ListPosts[0].PostsTitle}
                        />
                    </div>
                </div>
            </div>
        </div>
        )
    }
    return (
        <section className="phanam-intro-about-us-4" style={{textAlign: 'center'}}>
            {ListPosts[0] !== undefined ? renderBox() : ''}
        </section>
    )
}
export default BoxPost3;