
// start public
import Home from  '../pages/public/Home';
import Introduce from  '../pages/public/Introduce';
import Service from  '../pages/public/Service';
import ServiceDetail from  '../pages/public/Service/detail';
import CareerOpportunities from '../pages/public/CareerOpportunities';
import BigEvent from '../pages/public/BigEvent';
import CommunityResponsibility from '../pages/public/BigEvent/CommunityResponsibility';
import CulturalActivities from '../pages/public/BigEvent/CulturalActivities';
import TrainingDevelopment from '../pages/public/BigEvent/TrainingDevelopment';
import ContactSupport from '../pages/public/ContactSupport';
import Contact from '../pages/public/ContactSupport/Contact';
import OfficePhannam from '../pages/public/ContactSupport/OfficePhannam';
import AboutUs from '../pages/public/Introduce/AboutUs';
import DistributionSystem from '../pages/public/Introduce/DistributionSystem';
import CulturalActivitiesDetail from '../pages/public/BigEvent/CulturalActivities/detail';
import TrainingDevelopmentDetail from '../pages/public/BigEvent/TrainingDevelopment/detail';
import CommunityResponsibilityDetail from '../pages/public/BigEvent/CommunityResponsibility/detail';
import InstructionsForFiling from '../pages/public/CareerOpportunities/InstructionsForFiling';
import WorkingMap from '../pages/public/CareerOpportunities/WorkingMap';
import JobsAreRecruiting from '../pages/public/CareerOpportunities/JobsAreRecruiting';
import WelfarePolicy from '../pages/public/CareerOpportunities/WelfarePolicy';
import WelfarePolicyDetail from '../pages/public/CareerOpportunities/WelfarePolicy/detail';
import RecruitmentSteps from '../pages/public/CareerOpportunities/RecruitmentSteps';
import JobsAreRecruitingDetail from '../pages/public/CareerOpportunities/JobsAreRecruiting/detail';
import Recruitment from '../pages/public/CareerOpportunities/Recruitment';
// end public
import Login from '../pages/login';
import ResetPass from '../pages/login/ResetPass';
// start login

// end login

// start admin
import HomeAdmincp from '../pages/admincp/Home';
import MenuType from '../pages/admincp/bgdata/MenuType';
import ListMenu from '../components/admincp/bgdata/TypeMenu/ListMenu';
import ChangePass from '../pages/login/ChangePass';
import Users from '../pages/admincp/dataUsers/Users';
import Groups from '../pages/admincp/dataUsers/Groups';
import Permission from '../components/admincp/dataUsers/Groups/Permission';
import ListPermission from '../pages/admincp/dataUsers/ListPermission';
import Slider from '../pages/admincp/bgdata/Slider';
import AddSlider from '../pages/admincp/bgdata/Slider/Add.js';
import EditSlider from '../pages/admincp/bgdata/Slider/Edit.js';
import Steps from '../pages/admincp/bgdata/Steps';
import AddSteps from '../pages/admincp/bgdata/Steps/Add.js';
import EditSteps from '../pages/admincp/bgdata/Steps/Edit.js';

import Posts from '../pages/admincp/contents/Posts';
import AddPosts from '../pages/admincp/contents/Posts/Add';
import EditPosts from '../pages/admincp/contents/Posts/Edit';
import GroupTitle from '../pages/admincp/contents/GroupTitle';
import Support from '../pages/admincp/contacts/Support';
import Maps from '../pages/admincp/contacts/Map';


import Recruit from '../pages/admincp/recruitment/Recruit';
import AddRecruit from '../pages/admincp/recruitment/Recruit/Add';
import EditRecruit from '../pages/admincp/recruitment/Recruit/Edit';
import Profile from '../pages/admincp/recruitment/Profile';
import Vacancies from '../pages/admincp/recruitment/Vacancies';
import Area from '../pages/admincp/recruitment/Area';

// end admin
export const ROUTE_PUBLIC = [
    {
        path: '/',
        name: 'Trang chủ',
        exact: true,
        isActive: 0,
        component: Home
    },
    {
        path: '/Introduce',
        name: 'Giới thiệu về pha nam',
        exact: true,
        isActive: 1,
        component: Introduce
    },
    {
        path: '/Introduce/about-us',
        name: 'Về chúng tôi',
        exact: true,
        isActive: 0,
        component: AboutUs
    },
    {
        path: '/Introduce/distribution-system',
        name: 'Hệ thống phân phối',
        exact: true,
        isActive: 0,
        component: DistributionSystem
    },
    {
        path: '/service',
        name: 'Dịch vụ',
        exact: true,
        isActive: 1,
        component: Service
    },
    {
        path: '/service/:slug',
        name: 'Dịch vụ chi tiết',
        exact: true,
        isActive: 0,
        component: ServiceDetail
    },
    {
        path: '/career-opportunities',
        name: 'Cơ hội nghề nghiệp',
        exact: true,
        isActive: 1,
        component: CareerOpportunities
    },
    {
        path: '/career-opportunities/instructions-for-filing',
        name: 'Hướng dẫn nộp hồ sơ',
        exact: true,
        isActive: 0,
        component: InstructionsForFiling
    },
    {
        path: '/career-opportunities/working-map',
        name: 'Bản đồ làm việc',
        exact: true,
        isActive: 0,
        component: WorkingMap
    },
    {
        path: '/career-opportunities/jobs-are-recruiting',
        name: 'Việc làm đang tuyển',
        exact: true,
        isActive: 0,
        component: JobsAreRecruiting
    },
    {
        path: '/career-opportunities/jobs-are-recruiting/:slug',
        name: 'Việc làm đang tuyển chi tiết',
        exact: true,
        isActive: 0,
        component: JobsAreRecruitingDetail
    },
    {
        path: '/career-opportunities/welfare-policy',
        name: 'Chính sách phúc lợi',
        exact: true,
        isActive: 0,
        component: WelfarePolicy
    },
    {
        path: '/career-opportunities/welfare-policy/:slug',
        name: 'Chính sách phúc lợi',
        exact: true,
        isActive: 0,
        component: WelfarePolicyDetail
    },
    {
        path: '/career-opportunities/recruitment-steps',
        name: 'Các bước tuyển dụng',
        exact: true,
        isActive: 0,
        component: RecruitmentSteps
    },
    {
        path: '/big-event',
        name: 'Sự kiện nổi bật',
        exact: true,
        isActive: 1,
        component: BigEvent
    },
    {
        path: '/big-event/cultural-activities',
        name: 'Hoạt động văn hóa',
        exact: true,
        isActive: 0,
        component: CulturalActivities
    },
    {
        path: '/big-event/cultural-activities/:slug',
        name: 'Hoạt động văn hóa chi chi tiết',
        exact: true,
        isActive: 0,
        component: CulturalActivitiesDetail
    },
    {
        path: '/big-event/training-development',
        name: 'Đào tạo và phát triển',
        exact: true,
        isActive: 0,
        component: TrainingDevelopment
    },
    {
        path: '/big-event/training-development/:slug',
        name: 'Đào tạo và phát triển chi tiết',
        exact: true,
        isActive: 0,
        component: TrainingDevelopmentDetail
    },
    {
        path: '/big-event/community-responsibility',
        name: 'Trách nhiệm cộng dồng',
        exact: true,
        isActive: 0,
        component: CommunityResponsibility
    },
    {
        path: '/big-event/community-responsibility/:slug',
        name: 'Trách nhiệm cộng dồng chi tiết',
        exact: true,
        isActive: 0,
        component: CommunityResponsibilityDetail
    },
    {
        path: '/contact-support',
        name: 'Liên hệ & hỗ trợ',
        exact: true,
        isActive: 1,
        component: ContactSupport
    },
    {
        path: '/contact-support/contact',
        name: 'Liên hệ',
        exact: true,
        isActive: 0,
        component: Contact
    },
    {
        path: '/contact-support/office-phannam',
        name: 'Văn phòng phanam',
        exact: true,
        isActive: 0,
        component: OfficePhannam
    },
    {
        path: '/career-opportunities/Recruitment',
        name: 'Gửi yêu cầu nộp hồ sơ',
        exact: true,
        isActive: 0,
        component: Recruitment
    }
];


export const ROUTE_LOGIN = [
    {
        path: '/admincp/login',
        name: 'Trang đăng nhập',
        exact: true,
        component: Login
    },
    {
        path: '/admincp/reset-password',
        name: 'Trang khôi phục mật khẩu',
        exact: true,
        component: ResetPass
    },
    {
        path: '/admincp/reset-password/:token',
        name: 'Thay đổi mật khẩu',
        exact: true,
        component: ChangePass
    }
];

export const ROUTE_ADMINCP = [
    {
        path: '/admincp',
        name: 'Trang dashboard',
        exact: true,
        component: HomeAdmincp
    },
    {
        path: '/admincp/bgdata/menu-type',
        name: 'MenuType',
        exact: true,
        component: MenuType
    },

    {
        path: '/admincp/bgdata/slider',
        name: 'Slider',
        exact: true,
        component: Slider
    },
    {
        path: '/admincp/bgdata/slider/add',
        name: 'AddSlider',
        exact: true,
        component: AddSlider
    },
    {
        path: '/admincp/bgdata/slider/:idSlider/edit',
        name: 'EditSlider',
        exact: true,
        component: EditSlider
    },
    

    {
        path: '/admincp/bgdata/steps',
        name: 'Steps',
        exact: true,
        component: Steps
    },
    {
        path: '/admincp/bgdata/steps/add',
        name: 'AddSteps',
        exact: true,
        component: AddSteps
    },
    {
        path: '/admincp/bgdata/steps/:idSteps/edit',
        name: 'EditSteps',
        exact: true,
        component: EditSteps
    },

    {
        path: '/admincp/bgdata/menu-type/:idTypeMenu/list-menu',
        name: 'ListMenu',
        exact: true,
        component: ListMenu
    },
    {
        path: '/admincp/data-users/users',
        name: 'Users',
        exact: true,
        component: Users
    },
    {
        path: '/admincp/data-users/groups',
        name: 'Groups',
        exact: true,
        component: Groups
    },
    {
        path: '/admincp/data-users/groups/:idGroups/:idTypeMenu/permission',
        name: 'GroupPremission',
        exact: true,
        component: Permission
    },
    {
        path: '/admincp/data-users/list-permission',
        name: 'list-permission',
        exact: true,
        component: ListPermission
    },


    // nội dung
    {
        path: '/admincp/contents/posts',
        name: 'posts',
        exact: true,
        component: Posts
    },
    {
        path: '/admincp/contents/posts/add',
        name: 'AddPosts',
        exact: true,
        component: AddPosts
    },
    {
        path: '/admincp/contents/posts/:idPosts/edit',
        name: 'EditPosts',
        exact: true,
        component: EditPosts
    },
    {
        path: '/admincp/contents/group-title',
        name: 'posts',
        exact: true,
        component: GroupTitle
    },
    // tyuyển dụng

    {
        path: '/admincp/recruitment/recruit',
        name: 'recruit',
        exact: true,
        component: Recruit
    },
    {
        path: '/admincp/recruitment/recruit/add',
        name: 'AddRecruit',
        exact: true,
        component: AddRecruit
    },
    {
        path: '/admincp/recruitment/recruit/:idRecruit/edit',
        name: 'EditRecruit',
        exact: true,
        component: EditRecruit
    },
    {
        path: '/admincp/recruitment/profile',
        name: 'profile',
        exact: true,
        component: Profile
    },
    {
        path: '/admincp/recruitment/vacancies',
        name: 'vacancies',
        exact: true,
        component: Vacancies
    },
    {
        path: '/admincp/recruitment/area',
        name: 'area',
        exact: true,
        component: Area
    },
    // hỗ trợ

    {
        path: '/admincp/contacts/map',
        name: 'map',
        exact: true,
        component: Maps
    },
    {
        path: '/admincp/contacts/support',
        name: 'Support',
        exact: true,
        component: Support
    },
    


];