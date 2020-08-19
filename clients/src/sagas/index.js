import { all } from 'redux-saga/effects';
import { loginSagas } from './loginSaga'; // đăng nhập hệ thống
import { MenuTypeSagas } from './admincp/bgdata/MenuType';
import { UsersSagas } from './admincp/dataUsers/Users';
import {GroupsSagas} from './admincp/dataUsers/Groups';
import {ListPermissionSagas} from './admincp/dataUsers/ListPermission';
import { SideBarSagas } from './admincp/SideBar';
import { SliderSagas } from './admincp/bgdata/Slider';
import { StepsSagas } from './admincp/bgdata/Steps';
import {PostsSagas} from './admincp/contents/Posts';
import {GroupTitleSagas} from './admincp/contents/GroupTitle';
import {MapSagas} from './admincp/contacts/Map';
import {SupportSagas} from './admincp/contacts/Support';
import {VacanciesSagas} from './admincp/recruitment/Vacancies';
import {AreaSagas} from './admincp/recruitment/Area';
import {ProfileSagas} from './admincp/recruitment/Profile';
import {RecruitSagas} from './admincp/recruitment/Recruit';
import {DashboardSagas} from './admincp/home/Dashboard';

//trang public
import {HeaderSagas} from './public/Home/Header';
import {HomeSagas} from './public/Home';
import {ServiceSagas} from './public/Service';
import {AboutUsSagas} from './public/Introduce/AboutUs';
import { DistributionSystemSagas } from './public/Introduce/DistributionSystem';
import { BigEventSagas } from './public/BigEvent';
import { CulturalActivitiesSagas } from './public/BigEvent/CulturalActivities';
import { CommunityResponsibilitySagas } from './public/BigEvent/CommunityResponsibility';
import { TrainingDevelopmentSagas } from './public/BigEvent/TrainingDevelopment';
import { OfficePhannamSagas } from './public/ContactSupport/OfficePhannam'; 
import { ContactSagas } from './public/ContactSupport/Contact'; 
import { InstructionsForFilingSagas } from './public/CareerOpportunities/InstructionsForFiling';
import { RecruitmentStepsSagas } from './public/CareerOpportunities/RecruitmentSteps';
import {WorkingMapSagas} from './public/CareerOpportunities/WorkingMap';
import {JobsAreRecruitingSagas} from './public/CareerOpportunities/JobsAreRecruiting';
function* rootSaga() {
    yield all([
        loginSagas(), // login,reset pass
        MenuTypeSagas(),
        UsersSagas(),
        GroupsSagas(),
        ListPermissionSagas(),
        SideBarSagas(),
        SliderSagas(),
        StepsSagas(),
        PostsSagas(),
        GroupTitleSagas(),
        MapSagas(),
        SupportSagas(),
        VacanciesSagas(),
        AreaSagas(),
        ProfileSagas(),
        RecruitSagas(),
        DashboardSagas(),
        // trang public
        HeaderSagas(),
        HomeSagas(),
        ServiceSagas(),
        AboutUsSagas(),
        BigEventSagas(),
        DistributionSystemSagas(),
        CulturalActivitiesSagas(),
        TrainingDevelopmentSagas(),
        CommunityResponsibilitySagas(),
        OfficePhannamSagas(),
        ContactSagas(),
        InstructionsForFilingSagas(),
        RecruitmentStepsSagas(),
        WorkingMapSagas(),
        JobsAreRecruitingSagas()
    ]);
}
export default rootSaga;