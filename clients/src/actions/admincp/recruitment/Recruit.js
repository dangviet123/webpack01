import * as Types from '../../../constants/admincp/recruitment/Recruit';

export const ac_fetchRecruit = () => ({
    type: Types.FETCH_RECRUIT
});


export const ac_fetchRecruitSuccess = (datas,current_page,last_page,total,ListArea,ListVacancies) => ({
    type: Types.FETCH_RECRUIT_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total,
        ListArea,
        ListVacancies
    }
});

export const ac_addRecruit = data_add => ({
    type: Types.FETCH_RECRUIT_CREATE,
    payload: {
        data_add
    }
});

export const ac_editRecruit = (idRecruit,value) => ({
    type: Types.FETCH_RECRUIT_UPDATE,
    payload: {
        idRecruit,
        value
    }
});

export const ac_checkedOne = index => ({
    type: Types.FETCH_RECRUIT_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_RECRUIT_CHECKED_ALL,
    payload: {
        checkAll
    }
});

export const ac_activeOneRecruit = (idRecruit,active) => ({
    type: Types.FETCH_RECRUIT_ACTIVE_ONE,
    payload: {
        idRecruit,
        active
    }
});

export const ac_activeOneRecruitSuccess = (idRecruit,active) => ({
    type: Types.FETCH_RECRUIT_ACTIVE_ONE_SUCCESS,
    payload: {
        idRecruit,
        active
    }
});


export const ac_activeAllRecruit = (listcheck,active) => ({
    type: Types.FETCH_RECRUIT_ACTIVE_ALL,
    payload: {
        listcheck,
        active
    }
});

export const ac_deleteAllRecruit = (listcheck) => ({
    type: Types.FETCH_RECRUIT_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_activeAllRecruitSuccess = (list_id,active) => ({
    type: Types.FETCH_RECRUIT_ACTIVE_ALL_SUCCESS,
    payload: {
        list_id,
        active
    }
});

export const ac_getAddRecruit = () => ({
    type: Types.GET_ADD_RECRUIT,
});

export const ac_getAddRecruitSuccess = (ListArea,ListVacancies) => ({
    type: Types.GET_ADD_RECRUIT_SUCCESS,
    payload: {
        ListArea,
        ListVacancies
    }
});


export const ac_getEditRecruit = (idRecruit) => ({
    type: Types.GET_EDIT_RECRUIT,
    payload: {
        idRecruit
    }
});

export const ac_getEditRecruitSuccess = (edit,ListArea,ListVacancies) => ({
    type: Types.GET_EDIT_RECRUIT_SUCCESS,
    payload: {
        edit,
        ListArea,
        ListVacancies
    }
});

// hiển thị chi tiết

export const ac_showDetailRecruit = (idRecruit) => ({
    type: Types.SHOW_DETAIL_RECRUIT,
    payload: {
        idRecruit
    }
});

export const ac_showDetailRecruitSuccess = (ListDetail) => ({
    type: Types.SHOW_DETAIL_RECRUIT_SUCCESS,
    payload: {
        ListDetail
    }
});

export const ac_exportExcelRecruit = (data) => ({
    type: Types.EXPORT_EXCEL_RECRUIT,
    payload: {
        data
    }
});


