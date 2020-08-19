import React from 'react';
import {link_event} from '../../../../constants/admincp/config';
import renderHTML from 'react-render-html';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function BoxPost1(props) {
    const {ListPosts} = props;
    const renderBox = () => {
        return (
            <div className="row">
                <div className="col">
                <div className="wrapper">
                    <LazyLoadImage
                        className="img-fluid"
                        src={`${link_event}${ListPosts[3].Image}`}
                        alt={ListPosts[3].PostsTitle}
                    />
                    <h2>{ListPosts[3].PostsTitle}</h2>
                    <p>{renderHTML(ListPosts[3].Description)}</p>
                </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            {ListPosts[3] !== undefined ? renderBox() : ''}
        </div>
    )
}
export default BoxPost1;