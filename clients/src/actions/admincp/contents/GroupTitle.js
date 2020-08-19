import * as Types from '../../../constants/admincp/contents/GroupTitle';

export const ac_fetchGroupTitle = () => ({
    type: Types.FETCH_GROUP_TITLE
});


export const ac_fetchGroupTitleSuccess = (datas,current_page,last_page,total) => ({
    type: Types.FETCH_GROUP_TITLE_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total
    }
});

export const ac_addGroupTitle = data_add => ({
    type: Types.FETCH_GROUP_TITLE_CREATE,
    payload: {
        data_add
    }
});

export const ac_editGroupTitle = (idGroupTitle,value) => ({
    type: Types.FETCH_GROUP_TITLE_UPDATE,
    payload: {
        idGroupTitle,
        value
    }
});

export const ac_checkedOne = index => ({
    type: Types.FETCH_GROUP_TITLE_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_GROUP_TITLE_CHECKED_ALL,
    payload: {
        checkAll
    }
});

export const ac_activeOneGroupTitle = (idGroupTitle,active) => ({
    type: Types.FETCH_GROUP_TITLE_ACTIVE_ONE,
    payload: {
        idGroupTitle,
        active
    }
});

export const ac_activeOneGroupTitleSuccess = (idGroupTitle,active) => ({
    type: Types.FETCH_GROUP_TITLE_ACTIVE_ONE_SUCCESS,
    payload: {
        idGroupTitle,
        active
    }
});


export const ac_activeAllGroupTitle = (listcheck,active) => ({
    type: Types.FETCH_GROUP_TITLE_ACTIVE_ALL,
    payload: {
        listcheck,
        active
    }
});

export const ac_deleteAllGroupTitle = (listcheck) => ({
    type: Types.FETCH_GROUP_TITLE_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_activeAllGroupTitleSuccess = (list_id,active) => ({
    type: Types.FETCH_GROUP_TITLE_ACTIVE_ALL_SUCCESS,
    payload: {
        list_id,
        active
    }
});

