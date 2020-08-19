import React,{useEffect} from 'react';
import SliderHome from '../../../components/layouts/pubicLayout/Slider';
import {useSelector,useDispatch} from 'react-redux';
import * as langs from '../../../constants/admincp/languages';
import Breadcrumb from '../../../components/public/Shares/Breadcrumb';
import MenuChildren from '../../../components/public/Shares/MenuChildren';
import PostHome from '../../../components/public/BigEvent/PostHome';
import { ac_fetchBigEvent } from '../../../actions/public/BigEvent';
import { showModalDialogs } from '../../../actions/admincp/ModalDialogs';
import ShowVideo from '../../../components/public/BigEvent/ShowVideo';
import ModalDialogs from '../../../components/admincp/Shared/ModalDialogs';
function BigEvent() {
    const dispatch = useDispatch();
    const { Post } = useSelector(state => state.BigEvent);
    useEffect(() => {
       document.title = `${langs.big_event} | ${langs.name_company}`;
       window.scrollTo(0, 0);
    },[]);

    useEffect(() => {
        dispatch(ac_fetchBigEvent());
    }, [dispatch]);

    const list_prc = [
        {Name: langs.big_event,Slug: '/big-event',Active: 1}
    ];
    const {datas} = useSelector(state => state.Header);
    const NewData = datas.filter(d => d.Slug === '/big-event');

    const handleShowVideo = () => {
        dispatch(showModalDialogs(true,'md',langs.big_event,<ShowVideo Post={Post}  />));
    }

    return (
        <main>
            <ModalDialogs />
            <SliderHome />
            <Breadcrumb list_prc={list_prc} />
            <section className="sukiennoibat-1" style={{marginTop: -25}}>
                <MenuChildren ListMenu={NewData} />
                <div className="container">
                    <PostHome Post={Post} handleShowVideo={handleShowVideo}  />
                </div>
            </section>
        </main>
    )
}
export default BigEvent;
