import * as Types from '../../../constants/admincp/dataUsers/ListPermission';

export const ac_fetchListPermission = () => ({
    type: Types.FETCH_LISTPERMISSION
});


export const ac_fetchListPermissionSuccess = (datas,current_page,last_page,total) => ({
    type: Types.FETCH_LISTPERMISSION_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total
    }
});

export const ac_addListPermission = data_add => ({
    type: Types.FETCH_LISTPERMISSION_CREATE,
    payload: {
        data_add
    }
});

export const ac_editListPermission = (idListPermission,value) => ({
    type: Types.FETCH_LISTPERMISSION_UPDATE,
    payload: {
        idListPermission,
        value
    }
});

export const ac_checkedOne = index => ({
    type: Types.FETCH_LISTPERMISSION_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_LISTPERMISSION_CHECKED_ALL,
    payload: {
        checkAll
    }
});

export const ac_activeOneListPermission = (idListPermission,active) => ({
    type: Types.FETCH_LISTPERMISSION_ACTIVE_ONE,
    payload: {
        idListPermission,
        active
    }
});

export const ac_activeOneListPermissionSuccess = (idListPermission,active) => ({
    type: Types.FETCH_LISTPERMISSION_ACTIVE_ONE_SUCCESS,
    payload: {
        idListPermission,
        active
    }
});


export const ac_activeAllListPermission = (listcheck,active) => ({
    type: Types.FETCH_LISTPERMISSION_ACTIVE_ALL,
    payload: {
        listcheck,
        active
    }
});

export const ac_deleteAllListPermission = (listcheck) => ({
    type: Types.FETCH_LISTPERMISSION_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_activeAllListPermissionSuccess = (list_id,active) => ({
    type: Types.FETCH_LISTPERMISSION_ACTIVE_ALL_SUCCESS,
    payload: {
        list_id,
        active
    }
});

