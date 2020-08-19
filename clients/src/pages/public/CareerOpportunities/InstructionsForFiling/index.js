import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import MenuChildren from '../../../../components/public/Shares/MenuChildren';
import Breadcrumb from '../../../../components/public/Shares/Breadcrumb';
import { useLocation } from 'react-router-dom';
import SliderHome from './../../../../components/layouts/pubicLayout/Slider';
import { ac_fetchInstructionsForFiling } from '../../../../actions/public/CareerOpportunities/InstructionsForFiling';
import PostArticle from '../../../../components/public/CareerOpportunities/InstructionsForFiling/PostArticle';
function InstructionsForFiling() {
    const dispatch = useDispatch();
    const location = useLocation();
    const { Post } = useSelector(state => state.InstructionsForFiling);
    useEffect(() => {
        document.title = `${langs.office_phanam}  | ${langs.name_company}`;
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        dispatch(ac_fetchInstructionsForFiling());
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
    return (
        <main>
            <SliderHome />
            <Breadcrumb list_prc={list_prc} />
            <section className="huongdannophoso-1">
                <MenuChildren ListMenu={NewData} />
                <div className="container">
                    <div className="row justify-content-center">
                        <PostArticle Post={Post} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default InstructionsForFiling;
