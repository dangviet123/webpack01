import * as Types from '../../../constants/admincp/contacts/Support';

export const ac_fetchSupport = () => ({
    type: Types.FETCH_SUPPORT
});


export const ac_fetchSupportSuccess = (datas,current_page,last_page,total) => ({
    type: Types.FETCH_SUPPORT_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total
    }
});



export const ac_checkedOne = index => ({
    type: Types.FETCH_SUPPORT_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_SUPPORT_CHECKED_ALL,
    payload: {
        checkAll
    }
});


export const ac_deleteAllSupport = (listcheck) => ({
    type: Types.FETCH_SUPPORT_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_checkProcessOne = idSupport => ({
    type: Types.CHECK_PROCESS_SUPPORT_ONE,
    payload: {
        idSupport
    }
});

export const ac_checkProcessAll = listcheck => ({
    type: Types.CHECK_PROCESS_SUPPORT_ALL,
    payload: {
        listcheck
    }
});

export const ac_showDetailSupport = (idSupport) => ({
    type: Types.SHOW_DETAIL_SUPPORT,
    payload: {
        idSupport
    }
});

export const ac_showDetailSupportSuccess = (ListDetail) => ({
    type: Types.SHOW_DETAIL_SUPPORT_SUCCESS,
    payload: {
        ListDetail
    }
});

