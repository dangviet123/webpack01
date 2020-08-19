import * as Types from '../../../constants/admincp/bgdata/MenuType';

export const ac_fetchMenuType = () => ({
    type: Types.FETCH_MENUTYPE
});


export const ac_fetchMenuTypeSuccess = (datas,current_page,last_page,total) => ({
    type: Types.FETCH_MENUTYPE_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total
    }
});

export const ac_addMenuType = data_add => ({
    type: Types.FETCH_MENUTYPE_CREATE,
    payload: {
        data_add
    }
});

export const ac_editMenuType = (idTypeMenu,value) => ({
    type: Types.FETCH_MENUTYPE_UPDATE,
    payload: {
        idTypeMenu,
        value
    }
});

export const ac_checkedOne = index => ({
    type: Types.FETCH_MENUTYPE_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_MENUTYPE_CHECKED_ALL,
    payload: {
        checkAll
    }
});

export const ac_activeOneMenuType = (idTypeMenu,active) => ({
    type: Types.FETCH_MENUTYPE_ACTIVE_ONE,
    payload: {
        idTypeMenu,
        active
    }
});

export const ac_activeOneMenuTypeSuccess = (idTypeMenu,active) => ({
    type: Types.FETCH_MENUTYPE_ACTIVE_ONE_SUCCESS,
    payload: {
        idTypeMenu,
        active
    }
});


export const ac_activeAllMenuType = (listcheck,active) => ({
    type: Types.FETCH_MENUTYPE_ACTIVE_ALL,
    payload: {
        listcheck,
        active
    }
});

export const ac_deleteAllMenuType = (listcheck) => ({
    type: Types.FETCH_MENUTYPE_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_activeAllMenuTypeSuccess = (list_id,active) => ({
    type: Types.FETCH_MENUTYPE_ACTIVE_ALL_SUCCESS,
    payload: {
        list_id,
        active
    }
});

// list menu

export const ac_getMenu = (idTypeMenu) => ({
    type: Types.GET_MENU,
    payload: {
        idTypeMenu
    }
});

export const ac_getMenuSuccess = (datas) => ({
    type: Types.GET_MENU_SUCCESS,
    payload: {
        datas
    }
});

export const ac_checkSlug = (Slug,idMenu,idTypeMenu,id_parent) => ({
    type: Types.CHECK_SLUG,
    payload: {
        Slug,
        idMenu,
        idTypeMenu,
        id_parent
    }
});

export const ac_checkSlugSuccess = (Status) => ({
    type: Types.CHECK_SLUG_SUCCESS,
    payload: {
        Status
    }
});

export const ac_getListCategory = (idTypeMenu) => ({
    type: Types.GET_LIST_CATEGORY,
    payload: {
        idTypeMenu
    }
});

export const ac_getListCategorySuccess = data => ({
    type: Types.GET_LIST_CATEGORY_SUCCESS,
    payload: {
        ListCategory: data
    }
});

export const ac_addMenu = value => ({
    type: Types.ADD_MENU,
    payload: {
        value
    }
});

export const ac_editMenu = value => ({
    type: Types.EDIT_MENU,
    payload: {
        value
    }
});


export const ac_activeMenu = data => ({
    type: Types.ACTIVE_MENU,
    payload: {
        data
    }
});

export const ac_activeMenuSuccess = data => ({
    type: Types.ACTIVE_MENU_SUCCESS,
    payload: {
        data
    }
})

export const ac_deletteMenu = (idMenu,idTypeMenu) => ({
    type: Types.DELETE_MENU,
    payload: {
        idMenu,
        idTypeMenu
    }
});

export const ac_changeMenu = listmenu => ({ // handle change menu
    type: Types.CHANGE_MENU,
    payload: {
        listmenu
    }
});


// lấy tất cả quyền

export const ac_loadPermission = idMenu => ({
    type: Types.LOAD_PERMISION,
    payload: {
        idMenu
    }
});

export const ac_loadPermissionSuccess = Listpermision => ({
    type: Types.LOAD_PERMISION_SUCCESS,
    payload: {
        Listpermision
    }
});


export const ac_checkOnePermission = index => ({
    type: Types.CHECK_ONE_PERMISSION,
    payload: {
        index
    }
});

export const ac_checkAllPermission = (checked) => ({
    type: Types.CHECK_ALL_PERMISSION,
    payload: {
        checked
    }
});

export const ac_savePermission = data => ({
    type: Types.SAVE_PERMISSION,
    payload: {
        data
    }
})
