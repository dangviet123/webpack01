import React, { useEffect } from 'react';
import SliderHome from './../../../../components/layouts/pubicLayout/Slider';
import { useDispatch, useSelector } from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import MenuChildren from '../../../../components/public/Shares/MenuChildren';
import Breadcrumb from '../../../../components/public/Shares/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { ac_fetchWorkingMap } from '../../../../actions/public/CareerOpportunities/WorkingMap';
import MapHome from '../../../../components/public/CareerOpportunities/WorkingMap/MapHome';

function WorkingMap() {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        document.title = `${langs.working_map} | ${langs.name_company}`;
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        dispatch(ac_fetchWorkingMap());
    }, [dispatch]);


    // Breadcrumb
    const { datas } = useSelector(state => state.Header);
    const NewData = datas.filter(d => d.Slug === '/career-opportunities');
    let list_prc = [];
    if (datas.length > 0) {
        const { children } = NewData[0];
        const { pathname } = location;
        const Newchildren = children.filter(d => d.Slug === pathname);
        list_prc = [
            { Name: NewData[0].MenuName, 'Slug': NewData[0].Slug, Active: 0 },
            { Name: Newchildren[0].MenuName, Slug: '', Active: 1 }
        ];
    }
    const {ListWorking} = useSelector(state => state.WorkingMap);
    
    return (
        <main>
            <SliderHome />
            <Breadcrumb list_prc={list_prc} />
            <section className="bandovieclam-1">
                <MenuChildren ListMenu={NewData} />
                <div className="container">
                    <MapHome ListWorking={ListWorking} />
                </div>
            </section>
        </main>
    )
}

export default WorkingMap;