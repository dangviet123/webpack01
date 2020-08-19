import * as Types from '../../../constants/admincp/home/Dashboard';
const initialState = {
    ListBlock: {},
    ListRecruit: [],
    ListProfile: [],
    ListUser: [],
    ListPosts: [],
    LitstCompany: []
}
const Dashboard = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_DASHBOARD:{
            return {...state,ListBlock: {}};
        }
            
        case Types.FETCH_DASHBOARD_SUCCESS:{
            const {datas} = action.payload;
            const { ListBlock,ListRecruit,ListProfile,ListUser,ListPosts,LitstCompany } = datas;
            return {...state,ListBlock,ListRecruit,ListProfile,ListUser,ListPosts,LitstCompany};
        }
        
        default:
            return {...state};
    }
}

export default Dashboard;