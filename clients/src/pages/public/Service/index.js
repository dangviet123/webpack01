import React,{useEffect} from 'react';
import SliderHome from '../../../components/layouts/pubicLayout/Slider';
import BoxListPosts from '../../../components/public/Service/ListPosts';
import TextSvTitle  from '../../../components/public/Service/SvTitle';
import {useDispatch} from 'react-redux';
import {ac_fetchService} from '../../../actions/public/Service';
import {useSelector} from 'react-redux';
import * as langs from '../../../constants/admincp/languages';
import Breadcrumb from '../../../components/public/Shares/Breadcrumb';
function Service() {
    const dispatch = useDispatch();
    useEffect(() => {
       document.title = `${langs.service} | ${langs.name_company}`;
       window.scrollTo(0, 0);
    },[]);
    useEffect(() => {
        dispatch(ac_fetchService());
    },[dispatch]);

    const {ListPosts,SvTitle} = useSelector(state => state.Service);

    const list_prc = [
        {Name: langs.service,Slug: '/service',Active: 1}
    ];

    

    return (
        <main>
            <SliderHome  />
            
            <Breadcrumb list_prc={list_prc} />

            <TextSvTitle SvTitle={SvTitle} />
            <BoxListPosts ListPosts={ListPosts} />
        </main>

    )
}

export default Service;
