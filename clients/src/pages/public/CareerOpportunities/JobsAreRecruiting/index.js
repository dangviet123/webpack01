import React,{useEffect} from 'react';
import Search from '../../../../components/public/CareerOpportunities/JobsAreRecruiting/Search';
import TableJobs from '../../../../components/public/CareerOpportunities/JobsAreRecruiting/TableJobs';
import { useDispatch, useSelector } from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import MenuChildren from '../../../../components/public/Shares/MenuChildren';
import Breadcrumb from '../../../../components/public/Shares/Breadcrumb';
import { useLocation,useHistory } from 'react-router-dom';
import SliderHome from './../../../../components/layouts/pubicLayout/Slider';
import { ac_fetchJobsAreRecruiting } from '../../../../actions/public/CareerOpportunities/JobsAreRecruiting';
function JobsAreRecruiting() {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const {search} = location;
    useEffect(() => {
        document.title = `${langs.office_phanam}  | ${langs.name_company}`;
        window.scrollTo(0, 0);
    },[]);

    useEffect(() => {
        dispatch(ac_fetchJobsAreRecruiting());
    }, [search,dispatch]);

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

    const { ListArea,ListJobs,ListVacancies } = useSelector(state => state.JobsAreRecruiting);
    const handleGetDetail = Slug => {
        const { pathname } = location;
        history.push(`${pathname}/${Slug}`)
    }
    return (
        <main>
            <SliderHome />
            <Breadcrumb list_prc={list_prc} />
            <section className="vieclamdangtuyen-1" style={{marginTop: -15}}>
                <MenuChildren ListMenu={NewData} />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="wrapper">
                                <Search ListArea={ListArea} ListVacancies={ListVacancies} />
                                <TableJobs ListJobs={ListJobs} handleGetDetail={handleGetDetail} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default JobsAreRecruiting;