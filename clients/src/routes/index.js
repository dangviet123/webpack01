import loadable from '@loadable/component';
// start public
const Home = loadable(() => import('../pages/public/Home'));
const Introduce = loadable(() => import('../pages/public/Introduce'));
const Service = loadable(() => import('../pages/public/Service'));
const ServiceDetail = loadable(() => import('../pages/public/Service/detail'));
const CareerOpportunities = loadable(() => import('../pages/public/CareerOpportunities'));
const BigEvent = loadable(() => import('../pages/public/BigEvent'));
const CommunityResponsibility = loadable(() => import('../pages/public/BigEvent/CommunityResponsibility'));
const CulturalActivities = loadable(() => import('../pages/public/BigEvent/CulturalActivities'));
const TrainingDevelopment = loadable(() => import('../pages/public/BigEvent/TrainingDevelopment'));
const ContactSupport = loadable(() => import('../pages/public/ContactSupport'));
const Contact = loadable(() => import('../pages/public/ContactSupport/Contact'));
const OfficePhannam = loadable(() => import('../pages/public/ContactSupport/OfficePhannam'));
const AboutUs = loadable(() => import('../pages/public/Introduce/AboutUs'));
const DistributionSystem = loadable(() => import('../pages/public/Introduce/DistributionSystem'));
const CulturalActivitiesDetail = loadable(() => import('../pages/public/BigEvent/CulturalActivities/detail'));
const TrainingDevelopmentDetail = loadable(() => import('../pages/public/BigEvent/TrainingDevelopment/detail'));
const CommunityResponsibilityDetail = loadable(() => import('../pages/public/BigEvent/CommunityResponsibility/detail'));
const InstructionsForFiling = loadable(() => import('../pages/public/CareerOpportunities/InstructionsForFiling'));
const WorkingMap = loadable(() => import('../pages/public/CareerOpportunities/WorkingMap'));
const JobsAreRecruiting = loadable(() => import('../pages/public/CareerOpportunities/JobsAreRecruiting'));
const WelfarePolicy = loadable(() => import('../pages/public/CareerOpportunities/WelfarePolicy'));
const WelfarePolicyDetail = loadable(() => import('../pages/public/CareerOpportunities/WelfarePolicy/detail'));
const RecruitmentSteps = loadable(() => import('../pages/public/CareerOpportunities/RecruitmentSteps'));
const JobsAreRecruitingDetail = loadable(() => import('../pages/public/CareerOpportunities/JobsAreRecruiting/detail'));
const Recruitment = loadable(() => import('../pages/public/CareerOpportunities/Recruitment'));
// end public
const Login = loadable(() => import('../pages/login'));
const ResetPass = loadable(() => import('../pages/login/ResetPass'));
// start login

// end login

// start admin
const HomeAdmincp = loadable(() => import('../pages/admincp/Home'));
const MenuType = loadable(() => import('../pages/admincp/bgdata/MenuType'));
const ListMenu = loadable(() => import('../components/admincp/bgdata/TypeMenu/ListMenu'));
const ChangePass = loadable(() => import('../pages/login/ChangePass'));
const Users = loadable(() => import('../pages/admincp/dataUsers/Users'));
const Groups = loadable(() => import('../pages/admincp/dataUsers/Groups'));
const Permission = loadable(() => import('../components/admincp/dataUsers/Groups/Permission'));
const ListPermission = loadable(() => import('../pages/admincp/dataUsers/ListPermission'));
const Slider = loadable(() => import('../pages/admincp/bgdata/Slider'));
const AddSlider = loadable(() => import('../pages/admincp/bgdata/Slider/Add.js'));
const EditSlider = loadable(() => import('../pages/admincp/bgdata/Slider/Edit.js'));
const Steps = loadable(() => import('../pages/admincp/bgdata/Steps'));
const AddSteps = loadable(() => import('../pages/admincp/bgdata/Steps/Add.js'));
const EditSteps = loadable(() => import('../pages/admincp/bgdata/Steps/Edit.js'));

const Posts = loadable(() => import('../pages/admincp/contents/Posts'));
const AddPosts = loadable(() => import('../pages/admincp/contents/Posts/Add'));
const EditPosts = loadable(() => import('../pages/admincp/contents/Posts/Edit'));
const GroupTitle = loadable(() => import('../pages/admincp/contents/GroupTitle'));
const Support = loadable(() => import('../pages/admincp/contacts/Support'));
const Maps = loadable(() => import('../pages/admincp/contacts/Map'));


const Recruit = loadable(() => import('../pages/admincp/recruitment/Recruit'));
const AddRecruit = loadable(() => import('../pages/admincp/recruitment/Recruit/Add'));
const EditRecruit = loadable(() => import('../pages/admincp/recruitment/Recruit/Edit'));
const Profile = loadable(() => import('../pages/admincp/recruitment/Profile'));
const Vacancies = loadable(() => import('../pages/admincp/recruitment/Vacancies'));
const Area = loadable(() => import('../pages/admincp/recruitment/Area'));

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