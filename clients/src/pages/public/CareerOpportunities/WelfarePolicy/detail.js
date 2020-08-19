import React,{useEffect} from 'react';
import SliderHome from './../../../../components/layouts/pubicLayout/Slider';
import Breadcrumb from '../../../../components/public/Shares/Breadcrumb';
import * as langs from '../../../../constants/admincp/languages';
import CarouselDetail from '../../../../components/public/Shares/CarouselDetail';
import {useDispatch} from 'react-redux';
import { ac_fetchCulturalActivitiesDetail } from '../../../../actions/public/BigEvent/CulturalActivities';
import {useParams,useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import renderHTML from 'react-render-html';
function BoxListPosts() {
    const dispatch = useDispatch();
    const location = useLocation();
    const params = useParams();
    const {slug} = params;
    const {Detail} = useSelector(state => state.CulturalActivities);

    useEffect(() => {
        document.title = `${Detail.PostsTitle} | ${langs.name_company}`;
        window.scrollTo(0, 0);
     });

    useEffect(() => {
        dispatch(ac_fetchCulturalActivitiesDetail(slug));
     },[dispatch,slug]);


    // Breadcrumb
    const {datas} = useSelector(state => state.Header);
    const NewData = datas.filter(d => d.Slug === '/career-opportunities');
    let list_prc = [];
    if (datas.length > 0) {
        const {children} = NewData[0];
        const {pathname} = location;
        const newPathname = pathname.substring(0, pathname.length - (slug.length+1));
        const Newchildren = children.filter(d => d.Slug === newPathname);
        list_prc = [
            {Name: NewData[0].MenuName,'Slug': NewData[0].Slug,Active: 0},
            {Name: Newchildren[0].MenuName,Slug: Newchildren[0].Slug,Active: 0},
            {Name: Detail.PostsTitle,Slug: ''.Slug,Active: 1}
        ];
    }
    // end Breadcrumb
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
                        <CarouselDetail />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BoxListPosts;