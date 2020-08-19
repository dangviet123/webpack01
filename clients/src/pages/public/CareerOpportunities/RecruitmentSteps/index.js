import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import MenuChildren from '../../../../components/public/Shares/MenuChildren';
import Breadcrumb from '../../../../components/public/Shares/Breadcrumb';
import { useLocation,useHistory } from 'react-router-dom';
import SliderHome from './../../../../components/layouts/pubicLayout/Slider';
import { ac_fetchRecruitmentSteps } from '../../../../actions/public/CareerOpportunities/RecruitmentSteps';
import Steps from '../../../../components/public/CareerOpportunities/RecruitmentSteps/Steps';
import { Button } from '@material-ui/core';

function RecruitmentSteps() {
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const { ListSteps } = useSelector(state => state.RecruitmentSteps);
    useEffect(() => {
        document.title = `${langs.office_phanam}  | ${langs.name_company}`;
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        dispatch(ac_fetchRecruitmentSteps());
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

    const handleRedirect = () => {
        history.push('/career-opportunities/jobs-are-recruiting');
    }
    return (
        <main>
            <SliderHome />
            <Breadcrumb list_prc={list_prc} />
            <section className="cacbuoctuyendung-1">
                <MenuChildren ListMenu={NewData} />
                <div className="container">
                    <Steps ListSteps={ListSteps} />
                    <div className="row">
                        <div className="col">
                            <div className="list-button">
                                <Button variant="contained" color="primary" style={{marginRight: 15}} onClick={handleRedirect} >VIỆC LÀM ĐANG TUYỂN</Button>
                                <Button variant="contained" color="primary" onClick={handleRedirect} >NỘP HỒ SƠ</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default RecruitmentSteps;