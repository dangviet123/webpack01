import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import MenuChildren from '../../../../components/public/Shares/MenuChildren';
import Breadcrumb from '../../../../components/public/Shares/Breadcrumb';
import {useLocation} from 'react-router-dom';
import SliderHome from './../../../../components/layouts/pubicLayout/Slider';
import Company from '../../../../components/public/ContactSupport/OfficePhannam/Company';
import LoadMaps from '../../../../components/public/ContactSupport/OfficePhannam/LoadMaps';
import {ac_fetchOfficePhannam} from '../../../../actions/public/ContactSupport/OfficePhannam';
function OfficePhannam() {
    const [listMap,setListMap] = useState({});
    const dispatch = useDispatch();
    const location = useLocation();
    const {ListOffice} = useSelector(state => state.OfficePhannam);
    useEffect(() => {
       document.title = `${langs.office_phanam}  | ${langs.name_company}`;
       window.scrollTo(0, 0);
       setListMap(ListOffice.length > 0 ? ListOffice[0] : {});
    },[setListMap,ListOffice]);
    
    useEffect(() => {
        dispatch(ac_fetchOfficePhannam());
    },[dispatch]);

     // Breadcrumb
    const {datas} = useSelector(state => state.Header);
    const NewData = datas.filter(d => d.Slug === '/contact-support');
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

    
    const getMap = data => {
        setListMap(data);
    }

    return (
        <main>
            <SliderHome />
            <Breadcrumb list_prc={list_prc} />
            <section className="lienhe-1">
            <MenuChildren ListMenu={NewData} />
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="row no-gutters">
                            <Company ListOffice={ListOffice} getMap={getMap} />
                            <LoadMaps listMap={listMap} />
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}
export default OfficePhannam;