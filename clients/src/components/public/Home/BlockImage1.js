import React from 'react';
import { link_event, link_home } from '../../../constants/admincp/config';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import * as langs from '../../../constants/admincp/languages';
import { useHistory } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
function NewBlockImage1(props) {
    const { BlockImage1 } = props;
    const { DataSteps, Post } = BlockImage1;
    const history = useHistory();

    const handleRedirect = () => {
        history.push(Post.LinkArticle);
    }
    const renderSteps = () => {
        let xhtml = null;
        xhtml = DataSteps.map((step, index) => {
            return (
                <figure key={index}>
                    <LazyLoadImage
                        src={`${link_home}${step.Image}`}
                        alt={Post.StepsTitle}
                        height={48}
                        effect="blur"
                    />
                    <figcaption>
                        <h4>{step.StepsTitle}</h4>
                    </figcaption>
                </figure>
            )
        });
        return xhtml;
    }
    const renderPots = () => {
        return (
            <div className="block-wrapper">
                <div className="info-wrapper">
                    <h2>{Post.PostsTitle}</h2>
                    <p>{Post.Description}</p><span className="btn btn-more" onClick={handleRedirect} >{langs.view_more}</span>
                </div>
                <div className="banner-info-wrapper">
                    <div className="banner">
                        <LazyLoadImage
                            src={`${link_event}${Post.Image}`}
                            alt={Post.PostsTitle}
                            height={`100%`}
                        />
                    </div>
                    <div className="spec-info">
                        {BlockImage1.DataSteps !== undefined ? renderSteps() : ''}
                    </div>
                </div>
            </div>
        );
    }

    const renderPotsLoading = () => {
        return (
            <div className="block-wrapper">
                <div className="info-wrapper">
                    <h2><Skeleton variant="text" height={70} /></h2>
                    <p>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </p>
                    <span className="btn btn-more"  >
                        <Skeleton width={`100%`} variant="text" />
                    </span>
                </div>
                <div className="banner-info-wrapper">
                    <div className="banner">
                        <Skeleton variant="rect" height={`100%`} />
                    </div>
                    <div className="spec-info">
                        <figure>
                            <Skeleton variant="text" height={40} width={50} />
                            <figcaption>
                                <h4><Skeleton variant="text" height={40} width={280} /></h4>
                            </figcaption>
                        </figure>
                        <figure>
                            <Skeleton variant="text" height={40} width={50} />
                            <figcaption>
                                <h4><Skeleton variant="text" height={40} width={280} /></h4>
                            </figcaption>
                        </figure>
                        <figure>
                            <Skeleton variant="text" height={40} width={50} />
                            <figcaption>
                                <h4><Skeleton variant="text" height={40} width={280} /></h4>
                            </figcaption>
                        </figure>
                        <figure>
                            <Skeleton variant="text" height={40} width={50} />
                            <figcaption>
                                <h4><Skeleton variant="text" height={40} width={280} /></h4>
                            </figcaption>
                        </figure>
                        <figure>
                            <Skeleton variant="text" height={40} width={50} />
                            <figcaption>
                                <h4><Skeleton variant="text" height={40} width={280} /></h4>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="phanam-home-1">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {BlockImage1.Post !== undefined ? renderPots() : renderPotsLoading()}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NewBlockImage1;
