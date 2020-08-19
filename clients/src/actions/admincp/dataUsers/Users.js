import * as Types from '../../../constants/admincp/dataUsers/Users';

export const ac_fetchUsers = () => ({
    type: Types.FETCH_USERS
});


export const ac_fetchUsersSuccess = (datas,current_page,last_page,total) => ({
    type: Types.FETCH_USERS_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total
    }
});

export const ac_addUsers = data_add => ({
    type: Types.FETCH_USERS_CREATE,
    payload: {
        data_add
    }
});

export const ac_editUsers = (id,value) => ({
    type: Types.FETCH_USERS_UPDATE,
    payload: {
        id,
        value
    }
});

export const ac_checkedOne = index => ({
    type: Types.FETCH_USERS_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_USERS_CHECKED_ALL,
    payload: {
        checkAll
    }
});

export const ac_activeOneUsers = (id,active) => ({
    type: Types.FETCH_USERS_ACTIVE_ONE,
    payload: {
        id,
        active
    }
});

export const ac_activeOneUsersSuccess = (id,active) => ({
    type: Types.FETCH_USERS_ACTIVE_ONE_SUCCESS,
    payload: {
        id,
        active
    }
});


export const ac_activeAllUsers = (listcheck,active) => ({
    type: Types.FETCH_USERS_ACTIVE_ALL,
    payload: {
        listcheck,
        active
    }
});

export const ac_deleteAllUsers = (listcheck) => ({
    type: Types.FETCH_USERS_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_activeAllUsersSuccess = (list_id,active) => ({
    type: Types.FETCH_USERS_ACTIVE_ALL_SUCCESS,
    payload: {
        list_id,
        active
    }
});


export const ac_checkUserName = (username,id) => ({
    type: Types.FETCH_USERNAME_CHECK_UNIQUE,
    payload: {
        username,
        id
    }
});

export const ac_checkUserNameSuccess = (Status) => ({
    type: Types.FETCH_USERNAME_CHECK_UNIQUE_SUCCESS,
    payload: {
        Status
    }
});

export const ac_checkEmail = (email,id) => ({
    type: Types.FETCH_EMAIL_CHECK_UNIQUE,
    payload: {
        email,
        id
    }
});

export const ac_checkEmailSuccess = (Status) => ({
    type: Types.FETCH_EMAIL_CHECK_UNIQUE_SUCCESS,
    payload: {
        Status
    }
});

export const ac_fetchListGroup = () => ({
    type: Types.FETCH_LIST_GROUP
});

export const ac_fetchListGroupSuccess = ListGroupPermission => ({
    type: Types.FETCH_LIST_GROUP_SUCCESS,
    payload: {
        ListGroupPermission
    }
})



