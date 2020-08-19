import * as Types from '../../../constants/admincp/recruitment/Profile';

export const ac_fetchProfile = () => ({
    type: Types.FETCH_PROFILE
});


export const ac_fetchProfileSuccess = (datas,current_page,last_page,total,ListArea,ListVacancies) => ({
    type: Types.FETCH_PROFILE_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total,
        ListArea,
        ListVacancies
    }
});


export const ac_checkedOne = index => ({
    type: Types.FETCH_PROFILE_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_PROFILE_CHECKED_ALL,
    payload: {
        checkAll
    }
});


export const ac_deleteAllProfile = (listcheck) => ({
    type: Types.FETCH_PROFILE_DELETE_ALL,
    payload: {
        listcheck
    }
});
export const ac_checkProcessOne = idProfile => ({
    type: Types.CHECK_PROCESS_ONE,
    payload: {
        idProfile
    }
});

export const ac_checkProcessAll = listcheck => ({
    type: Types.CHECK_PROCESS_ALL,
    payload: {
        listcheck
    }
});

export const ac_showDetailProfile = (idProfile) => ({
    type: Types.SHOW_DETAIL_PROFILE,
    payload: {
        idProfile
    }
});

export const ac_showDetailProfileSuccess = (ListDetail) => ({
    type: Types.SHOW_DETAIL_PROFILE_SUCCESS,
    payload: {
        ListDetail
    }
});

export const ac_exportExcelProfile = (data) => ({
    type: Types.EXPORT_EXCEL_PROFILE,
    payload: {
        data
    }
});




