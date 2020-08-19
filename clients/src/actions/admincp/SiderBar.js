import * as Types from './../../constants/admincp/SideBar';

export const ac_getSideBar = () => ({
    type: Types.GET_SIDE_BAR
});

export const ac_getSideBarSuccess = (datas,UserOnline,ListPermision,list_icon) => ({
    type: Types.GET_SIDE_BAR_SUCCESS,
    payload: {
        datas,
        UserOnline,
        ListPermision,
        list_icon
    }
});