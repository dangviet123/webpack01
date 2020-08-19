import React,{useEffect} from 'react';
import SliderHome from './../../../components/layouts/pubicLayout/Slider';
import Breadcrumb from '../../../components/public/Shares/Breadcrumb';
import * as langs from '../../../constants/admincp/languages';
import CarouselDetail from '../../../components/public/Shares/CarouselDetail';
import {useDispatch} from 'react-redux';
import { ac_fetchServiceDetail } from '../../../actions/public/Service';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import renderHTML from 'react-render-html';
function ServiceDetail() {
    const dispatch = useDispatch();
    const params = useParams();
    const {slug} = params;
    const {Detail} = useSelector(state => state.Service);
    
    const list_prc = [
        {Name: langs.service,Slug: '/service',Active: 0},
        {Name: Detail.PostsTitle,Active: 1}
    ];

    useEffect(() => {
        document.title = `${Detail.PostsTitle} | ${langs.name_company}`;
        window.scrollTo(0, 0);
     });

    useEffect(() => {
        dispatch(ac_fetchServiceDetail(slug));
     },[dispatch,slug]);

    return (
        <main>
            <SliderHome />
            <Breadcrumb list_prc={list_prc} />
            <section className="dichvu-3">
                <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="content">
                            <div className="title">
                                <h3>{Detail.PostsTitle}</h3>
                            </div>
                            <div className="desc">
                                <p>{Detail.Description !== undefined ? renderHTML(Detail.Description) : ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="slider" style={{width: '85%',margin: 'auto'}}>
                    <div className="swiper-container">
                        <CarouselDetail  />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServiceDetail;