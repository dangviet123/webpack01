import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import SideBarReducer from './admincp/SideBar';
import ModalDialogsReducer from './admincp/ModalDialogs';
import LoginReducer from './login/login';
import showLoadingReducer from './login/loading';
import showSubmitReducer from './login/loadSubmit';
import showSearchReducer from './login/Search';
import showSubmitFormReducer from './login/loadSubmitForm';
import MenuTypeReducer from './admincp/bgdata/MenuType';
import AlertConfirmReducer from './admincp/ModalConfirmAlert';
import UsersReducer from './admincp/dataUsers/Users';
import GroupsReducer from './admincp/dataUsers/Groups';
import ListPermissionReducer from './admincp/dataUsers/ListPermission';
import ListMenuReducer from './admincp/bgdata/LitsMenu';
import GroupListMenuReducer from './admincp/dataUsers/GroupListMenu';
import { loadingBarReducer } from 'react-redux-loading-bar';
import SliderReducer from './admincp/bgdata/Slider';
import StepsReducer from './admincp/bgdata/Steps';
import GroupTitleReducer from './admincp/contents/GroupTitle';
import PostsReducer from './admincp/contents/Posts';
import SupportReducer from './admincp/contacts/Support';
import MapReducer from './admincp/contacts/Map';
import AreaReducer from './admincp/recruitment/Area';
import ProfileReducer from './admincp/recruitment/Profile';
import RecruitReducer from './admincp/recruitment/Recruit';
import VacanciesReducer from './admincp/recruitment/Vacancies';
import DashboardReducer from './admincp/home/Dashboard';

// trang home

import HeaderReducer from './public/Home/Header';
import HomeReducer from './public/Home';
import ServiceReducer from './public/Service';

import AboutUsReducer from './public/Introduce/AboutUs';
import DistributionSystemReducer from './public/Introduce/DistributionSystem';
import BigEventReducer from './public/BigEvent';
import CulturalActivitiesReducer from './public/BigEvent/CulturalActivities';
import TrainingDevelopmentReducer from './public/BigEvent/TrainingDevelopment';
import CommunityResponsibilityReducer from './public/BigEvent/CommunityResponsibility';
import OfficePhannamReducer from './public/ContactSupport/OfficePhannam';
import InstructionsForFilingReducer from './public/CareerOpportunities/InstructionsForFiling';
import RecruitmentStepsReducer from './public/CareerOpportunities/RecruitmentSteps';
import WorkingMapReducer from './public/CareerOpportunities/WorkingMap';
import JobsAreRecruitingReducer from './public/CareerOpportunities/JobsAreRecruiting';
const rootReducer = (history) => combineReducers({ // gộp nhiều reducer thành 1
    router: connectRouter(history),
    loadingBar: loadingBarReducer,
    SideBar: SideBarReducer,
    ModalDialogsReducer: ModalDialogsReducer,
    LoginReducer: LoginReducer,
    showLoading: showLoadingReducer,
    showSubmit: showSubmitReducer,
    loadSubmitForm: showSubmitFormReducer,
    MenuType: MenuTypeReducer,
    AlertConfirm: AlertConfirmReducer,
    showSearch: showSearchReducer,
    Users: UsersReducer,
    Groups: GroupsReducer,
    ListPermission: ListPermissionReducer,
    ListMenu: ListMenuReducer,
    GroupListMenu: GroupListMenuReducer,
    Slider: SliderReducer,
    Steps: StepsReducer,
    GroupTitle: GroupTitleReducer,
    Posts: PostsReducer,
    Map: MapReducer,
    Support: SupportReducer,
    Area: AreaReducer,
    Profile: ProfileReducer,
    Recruit: RecruitReducer,
    Vacancies: VacanciesReducer,
    Dashboard: DashboardReducer,

    // trang chủ
    Header: HeaderReducer,
    Home: HomeReducer,
    Service: ServiceReducer,
    AboutUs: AboutUsReducer,
    DistributionSystem: DistributionSystemReducer,
    BigEvent: BigEventReducer,
    CulturalActivities: CulturalActivitiesReducer,
    TrainingDevelopment: TrainingDevelopmentReducer,
    CommunityResponsibility: CommunityResponsibilityReducer,
    OfficePhannam: OfficePhannamReducer,
    InstructionsForFiling: InstructionsForFilingReducer,
    RecruitmentSteps: RecruitmentStepsReducer,
    WorkingMap: WorkingMapReducer,
    JobsAreRecruiting: JobsAreRecruitingReducer
});
export default rootReducer;