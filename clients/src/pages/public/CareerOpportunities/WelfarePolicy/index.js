import React,{useEffect} from 'react';
import SliderHome from './../../../../components/layouts/pubicLayout/Slider';
import BoxListPosts from './../../../../components/public/BigEvent/BoxListPosts';
import {useDispatch,useSelector} from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import MenuChildren from '../../../../components/public/Shares/MenuChildren';
import Breadcrumb from '../../../../components/public/Shares/Breadcrumb';
import {useLocation} from 'react-router-dom';
import {ac_fetchCulturalActivities} from '../../../../actions/public/BigEvent/CulturalActivities';
function CulturalActivities() {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
       document.title = `${langs.welfare_policy} | ${langs.name_company}`;
       window.scrollTo(0, 0);
    });

    useEffect(() => {
        dispatch(ac_fetchCulturalActivities());
    },[dispatch]);


    // Breadcrumb
    const {datas} = useSelector(state => state.Header);
    const NewData = datas.filter(d => d.Slug === '/career-opportunities');
    let list_prc = [];
    if (datas.length > 0) {
        const {children} = NewData[0];
        const {pathname} = location;
        const Newchildren = children.filter(d => d.Slug === pathname);
        list_prc = [
            {Name: NewData[0].MenuName,'Slug': NewData[0].Slug,Active: 0},
            {Name: Newchildren[0].MenuName,Slug: '',Active: 1}
        ];
    }
    // end Breadcrumb
    const {ListPosts} = useSelector(state => state.CulturalActivities);
    return (
        <main>
            <SliderHome />
            <Breadcrumb list_prc={list_prc} />
            <section className="hoatdongvanhoa-1" style={{marginTop: 20}}>
                <MenuChildren ListMenu={NewData} />
                <BoxListPosts ListPosts={ListPosts} />
            </section>
        </main>
    )
}

export default CulturalActivities;
