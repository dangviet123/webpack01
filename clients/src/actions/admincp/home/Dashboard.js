import * as Types from '../../../constants/admincp/home/Dashboard';

export const ac_fetchDashboard = () => ({
    type: Types.FETCH_DASHBOARD
});


export const ac_fetchDashboardSuccess = (datas) => ({
    type: Types.FETCH_DASHBOARD_SUCCESS,
    payload:{
        datas
    }
});

export const ac_changePassWord = value => ({
    type: Types.CHANGE_PASSWORD_HOME,
    payload: {
        value
    }
});

export const ac_fetchLogOut = () => ({
    type: Types.FETCH_LOGOUT
});
