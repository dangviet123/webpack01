import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import MenuChildren from '../../../../components/public/Shares/MenuChildren';
import Breadcrumb from '../../../../components/public/Shares/Breadcrumb';
import {useLocation} from 'react-router-dom';
import SliderHome from './../../../../components/layouts/pubicLayout/Slider';
import {ac_fetchContact,ac_addContact} from '../../../../actions/public/ContactSupport/Contact';
import FormContact from '../../../../components/public/ContactSupport/Contact/FormContact'
function Contact() {

    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
       document.title = `${langs.contact_send}  | ${langs.name_company}`;
       window.scrollTo(0, 0);
    },[]);
    
    useEffect(() => {
        dispatch(ac_fetchContact());
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

    const addContact = value => {
        dispatch(ac_addContact(value));
    }

    return (
        <main>
            <SliderHome />
            <Breadcrumb list_prc={list_prc} />
            <section className="lienhe-1" style={{backgroundColor: 'white'}}>
                <MenuChildren ListMenu={NewData} />
                <div className="cs-wrapper">
                    <div className="wapper_container">
                        <h3 style={{
                            textAlign: 'center',
                            marginBottom: 30,
                            marginTop: 10,
                            color: '#006ab6'
                        }}>THÔNG TIN LIÊN HỆ</h3>
                        <FormContact addContact={addContact} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact;