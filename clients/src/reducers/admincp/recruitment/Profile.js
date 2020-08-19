import * as Types from '../../../constants/admincp/recruitment/Profile';
const initialState = {
    datas: [],
    ListArea: [],
    ListVacancies: [],
    ListDetail: {},
    current_page: 1,
    total: 0,
    last_page: 1 // trang cuối
}
const Profile = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PROFILE: {
            return {...state};
        }
            
        case Types.FETCH_PROFILE_SUCCESS:{
            const { datas,current_page,last_page,total,ListArea,ListVacancies } = action.payload;
            return {...state,datas: datas,
                current_page: current_page,
                last_page: last_page,
                total: total,
                ListArea: ListArea,
                ListVacancies: ListVacancies
            };
        }
            
        case Types.FETCH_PROFILE_CHECKED_ONE:{
            const {index} = action.payload;
            state.datas[index].checked= !state.datas[index].checked;
            return {...state};
        }
            
        case Types.FETCH_PROFILE_CHECKED_ALL:{
            const {checkAll} = action.payload;
            state.datas.forEach((el,index) => {state.datas[index].checked = checkAll;});
            return {...state};
        }
         
        case Types.SHOW_DETAIL_PROFILE: {
            return {...state,ListDetail: {}};
        }

        case Types.SHOW_DETAIL_PROFILE_SUCCESS: {
            const {ListDetail} = action.payload;
            return {...state,ListDetail: ListDetail};
        }
            
        default:
            return {...state};
    }
}

export default Profile;