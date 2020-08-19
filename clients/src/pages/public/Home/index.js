import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import SliderHome from './../../../components/layouts/pubicLayout/Slider';
import NewBlockImage1 from '../../../components/public/Home/BlockImage1';
import NewBlockImage2 from '../../../components/public/Home/BlockImage2';
import NewBlockImage3 from '../../../components/public/Home/BlockImage3';
import NewBlockText1 from '../../../components/public/Home/BlockText1';
import NewBlockText2 from '../../../components/public/Home/BlockText2';
import {ac_fetchHome} from '../../../actions/public/Home';
import {useSelector} from 'react-redux';
import * as langs from '../../../constants/admincp/languages';
function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
       document.title = `${langs.home_pl} | ${langs.name_company}`;
       window.scrollTo(0, 0);
    },[]);
    useEffect(() => {
        dispatch(ac_fetchHome());
    },[dispatch]);

    const {BlockImage1,BlockImage2,BlockImage3,BlockText1,BlockText2} = useSelector(state => state.Home);
    return (
        <div>
            <div>
                <main>
                    <SliderHome />
                    <NewBlockImage1 BlockImage1={BlockImage1} />
                    <NewBlockText1 BlockText1={BlockText1} />
                    <NewBlockImage2 BlockImage2={BlockImage2} />
                    <NewBlockText2 BlockText2={BlockText2} />
                    <NewBlockImage3 BlockImage3={BlockImage3} />
                </main>
            </div>
        </div>
    )
}

export default Home;
