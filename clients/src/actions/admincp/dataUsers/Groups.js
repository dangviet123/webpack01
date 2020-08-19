import * as Types from '../../../constants/admincp/dataUsers/Groups';

export const ac_fetchGroups = () => ({
    type: Types.FETCH_GROUPS
});


export const ac_fetchGroupsSuccess = (datas,current_page,last_page,total) => ({
    type: Types.FETCH_GROUPS_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total
    }
});

export const ac_addGroups = data_add => ({
    type: Types.FETCH_GROUPS_CREATE,
    payload: {
        data_add
    }
});

export const ac_editGroups = (idGroups,value) => ({
    type: Types.FETCH_GROUPS_UPDATE,
    payload: {
        idGroups,
        value
    }
});

export const ac_checkedOne = index => ({
    type: Types.FETCH_GROUPS_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_GROUPS_CHECKED_ALL,
    payload: {
        checkAll
    }
});

export const ac_activeOneGroups = (idGroups,active) => ({
    type: Types.FETCH_GROUPS_ACTIVE_ONE,
    payload: {
        idGroups,
        active
    }
});

export const ac_activeOneGroupsSuccess = (idGroups,active) => ({
    type: Types.FETCH_GROUPS_ACTIVE_ONE_SUCCESS,
    payload: {
        idGroups,
        active
    }
});


export const ac_activeAllGroups = (listcheck,active) => ({
    type: Types.FETCH_GROUPS_ACTIVE_ALL,
    payload: {
        listcheck,
        active
    }
});

export const ac_deleteAllGroups = (listcheck) => ({
    type: Types.FETCH_GROUPS_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_activeAllGroupsSuccess = (list_id,active) => ({
    type: Types.FETCH_GROUPS_ACTIVE_ALL_SUCCESS,
    payload: {
        list_id,
        active
    }
});


// phân quyền
export const ac_getMenu = (idGroups,idTypeMenu) => ({
    type: Types.GROUP_GET_MENU,
    payload: {
        idGroups,
        idTypeMenu
    }
});

export const ac_getMenuSuccess = (datas) => ({
    type: Types.GROUP_GET_MENU_SUCCESS,
    payload: {
        datas
    }
});

export const ac_activeMenu = data => ({
    type: Types.GROUP_ACTIVE_MENU,
    payload: {
        data
    }
});


export const ac_loadPermission = (idMenu,idGroups) => ({
    type: Types.GROUP_LOAD_PERMISION,
    payload: {
        idMenu,
        idGroups
    }
});

export const ac_loadPermissionSuccess = Listpermision => ({
    type: Types.GROUP_LOAD_PERMISION_SUCCESS,
    payload: {
        Listpermision
    }
});

export const ac_checkOnePermission = index => ({
    type: Types.GROUP_CHECK_ONE_PERMISSION,
    payload: {
        index
    }
});

export const ac_checkAllPermission = (checked) => ({
    type: Types.GROUP_CHECK_ALL_PERMISSION,
    payload: {
        checked
    }
});

export const ac_savePermission = data => ({
    type: Types.GROUP_SAVE_PERMISSION,
    payload: {
        data
    }
})


