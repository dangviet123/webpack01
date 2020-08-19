import * as Types from '../../../constants/admincp/contacts/Map';

export const ac_fetchMap = () => ({
    type: Types.FETCH_MAP
});


export const ac_fetchMapSuccess = (datas,current_page,last_page,total) => ({
    type: Types.FETCH_MAP_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total
    }
});

export const ac_addMap = data_add => ({
    type: Types.FETCH_MAP_CREATE,
    payload: {
        data_add
    }
});

export const ac_editMap = (idMap,value) => ({
    type: Types.FETCH_MAP_UPDATE,
    payload: {
        idMap,
        value
    }
});

export const ac_checkedOne = index => ({
    type: Types.FETCH_MAP_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_MAP_CHECKED_ALL,
    payload: {
        checkAll
    }
});

export const ac_activeOneMap = (idMap,active) => ({
    type: Types.FETCH_MAP_ACTIVE_ONE,
    payload: {
        idMap,
        active
    }
});

export const ac_activeOneMapSuccess = (idMap,active) => ({
    type: Types.FETCH_MAP_ACTIVE_ONE_SUCCESS,
    payload: {
        idMap,
        active
    }
});


export const ac_activeAllMap = (listcheck,active) => ({
    type: Types.FETCH_MAP_ACTIVE_ALL,
    payload: {
        listcheck,
        active
    }
});

export const ac_deleteAllMap = (listcheck) => ({
    type: Types.FETCH_MAP_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_activeAllMapSuccess = (list_id,active) => ({
    type: Types.FETCH_MAP_ACTIVE_ALL_SUCCESS,
    payload: {
        list_id,
        active
    }
});

