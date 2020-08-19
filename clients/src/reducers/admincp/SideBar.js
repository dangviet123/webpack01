import * as Types from '../../constants/admincp/SideBar';
const initialState = {
    datas: [],
    UserOnline: {},
    ListPermision: [], // danh sách quyền user
    list_icon: {}
}
const SideBar = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_SIDE_BAR_SUCCESS:
            const { datas,UserOnline,ListPermision,list_icon } = action.payload;
            return {...state,datas,UserOnline,ListPermision,list_icon};
        default:
            return {...state};
    }
}

export default SideBar;