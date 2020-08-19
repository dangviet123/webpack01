import React,{useEffect} from 'react';
import SliderHome from '../../../../components/layouts/pubicLayout/Slider';
import {ac_fetchAboutUs} from '../../../../actions/public/Introduce/AboutUs';
import {useDispatch,useSelector} from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import Breadcrumb from '../../../../components/public/Shares/Breadcrumb';
import BoxPost1 from '../../../../components/public/Introduce/AboutUs/BoxPost1';
import BoxPost2 from '../../../../components/public/Introduce/AboutUs/BoxPost2';
import BoxPost3 from '../../../../components/public/Introduce/AboutUs/BoxPost3';
import MenuChildren from '../../../../components/public/Shares/MenuChildren';
import {useLocation} from 'react-router-dom';
function AboutUs() {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
       document.title = `${langs.about_us} | ${langs.name_company}`;
       window.scrollTo(0, 0);
    });
    useEffect(() => {
        dispatch(ac_fetchAboutUs());
    },[dispatch]);


    // Breadcrumb
    const {datas} = useSelector(state => state.Header);
    const NewData = datas.filter(d => d.Slug === '/Introduce');
    let list_prc = [];
    if (datas.length > 0) {
        const {children} = NewData[0];
        const {pathname} = location;
        const Newchildren = children.filter(d => d.Slug === pathname);
        list_prc = [
            {Name: NewData[0].MenuName,'Slug': children[0].Slug,Active: 0},
            {Name: Newchildren[0].MenuName,Slug: '',Active: 1}
        ];
    }
    // end Breadcrumb

    const {ListPosts} = useSelector(state => state.AboutUs); 

    return (
        <main>
            <SliderHome />
            <Breadcrumb list_prc={list_prc} />
            <section className="phanam-intro-about-us-1">
                
                <MenuChildren ListMenu={NewData} />
                
                <BoxPost1 ListPosts={ListPosts} />
            </section>
            <BoxPost2 ListPosts={ListPosts} />
            
            <BoxPost3 ListPosts={ListPosts} />
        </main>
    )
}
export default AboutUs;
