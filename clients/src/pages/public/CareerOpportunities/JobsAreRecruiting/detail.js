import React,{useEffect} from 'react';
import ListJobsOrther from '../../../../components/public/CareerOpportunities/JobsAreRecruiting/ListJobsOrther';
import DetailJobs from '../../../../components/public/CareerOpportunities/JobsAreRecruiting/DetailJobs';
import SliderHome from './../../../../components/layouts/pubicLayout/Slider';
import Breadcrumb from '../../../../components/public/Shares/Breadcrumb';
import * as langs from '../../../../constants/admincp/languages';
import {useParams,useLocation,useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { ac_fetchJobsAreRecruitingDetail, ac_addProfileSubmit } from '../../../../actions/public/CareerOpportunities/JobsAreRecruiting';
import ModalDialogs from '../../../../components/admincp/Shared/ModalDialogs';
import FormProfile from '../../../../components/public/CareerOpportunities/JobsAreRecruiting/FormProfile';
import { showModalDialogs } from '../../../../actions/admincp/ModalDialogs';
function JobsAreRecruitingDetail() {
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const params = useParams();
    const {slug} = params;
    const {Detail,ListOrTher} = useSelector(state => state.JobsAreRecruiting);

    useEffect(() => {
        document.title = `${Detail.Recruit} | ${langs.name_company}`;
     });

    useEffect(() => {
        dispatch(ac_fetchJobsAreRecruitingDetail(slug));
     },[dispatch,slug]);

    // Breadcrumb
    const {datas} = useSelector(state => state.Header);
    const NewData = datas.filter(d => d.Slug === '/career-opportunities');
    let list_prc = [];
    if (datas.length > 0) {
        const {children} = NewData[0];
        const {pathname} = location;
        const newPathname = pathname.substring(0, pathname.length - (slug.length+1));
        const Newchildren = children.filter(d => d.Slug === newPathname);
        list_prc = [
            {Name: NewData[0].MenuName,'Slug': NewData[0].Slug,Active: 0},
            {Name: Newchildren[0].MenuName,Slug: Newchildren[0].Slug,Active: 0},
            {Name: Detail.Recruit ,Slug: ''.Slug,Active: 1}
        ];
    }
    // end Breadcrumb
    const handleChangeDetail = Slug => {
        history.push(`/career-opportunities/jobs-are-recruiting/${Slug}`);
    }

    const handleShowForm = (idRecruit) => {
        dispatch(showModalDialogs(true,'md',Detail.Recruit,<FormProfile idRecruit={idRecruit} handleAddProfile={handleAddProfile}  />));
    }

    const handleAddProfile = value => {
        dispatch(ac_addProfileSubmit(value));
    }

    return (
        <main>
            <ModalDialogs />
            <SliderHome />
            <Breadcrumb list_prc={list_prc} />
            <section className="tuyendung-1">
                <div className="container">
                    <div className="row">
                        <DetailJobs Detail={Detail} handleShowForm={handleShowForm} />
                        <ListJobsOrther ListOrTher={ListOrTher} handleChangeDetail={handleChangeDetail} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default JobsAreRecruitingDetail;
