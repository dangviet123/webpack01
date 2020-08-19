import React from 'react';
import {link_event} from '../../../constants/admincp/config';
import renderHTML from 'react-render-html';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from '@material-ui/lab/Skeleton';
import start from '../../../images/start.png';
function PostHome(props) {
   const { Post,handleShowVideo } = props;
    const renderPost = () => {
        return (
            <div className="col-lg-8">
                <div className="content">
                    {renderHTML(Post.Content)}
                </div>
                <div className="video">
                    <LazyLoadImage
                        src={`${link_event}${Post.Image}`}
                        alt={Post.PostsTitle}
                        height={`100%`}
                        width={`100%`}
                    />
                    <div className="play-button" onClick={handleShowVideo}><img src={start} alt="start" /></div>
                </div>
            </div>
        )
    }
    const renderLoading = () => {
        return (
            <div className="col-lg-8">
                <div className="content">
                    <p>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </p>
                    <p>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </p>
                    <p>
                        <Skeleton variant="text" />
                    </p>
                </div>
                <div className="video">
                    <Skeleton  variant="rect" height={426} />
                    <div className="play-button"><img src={start} alt="start1" /></div>
                </div>
        </div>
        )
    }
    return (
        <div className="row justify-content-center">
            {Post.Content !== undefined ? renderPost() : renderLoading()}
        </div>
    )
}
export default PostHome;
