import * as Types from '../../../constants/admincp/recruitment/Area';

export const ac_fetchArea = () => ({
    type: Types.FETCH_AREA
});


export const ac_fetchAreaSuccess = (datas,current_page,last_page,total) => ({
    type: Types.FETCH_AREA_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total
    }
});

export const ac_addArea = data_add => ({
    type: Types.FETCH_AREA_CREATE,
    payload: {
        data_add
    }
});

export const ac_editArea = (idArea,value) => ({
    type: Types.FETCH_AREA_UPDATE,
    payload: {
        idArea,
        value
    }
});

export const ac_checkedOne = index => ({
    type: Types.FETCH_AREA_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_AREA_CHECKED_ALL,
    payload: {
        checkAll
    }
});

export const ac_activeOneArea = (idArea,active) => ({
    type: Types.FETCH_AREA_ACTIVE_ONE,
    payload: {
        idArea,
        active
    }
});

export const ac_activeOneAreaSuccess = (idArea,active) => ({
    type: Types.FETCH_AREA_ACTIVE_ONE_SUCCESS,
    payload: {
        idArea,
        active
    }
});


export const ac_activeAllArea = (listcheck,active) => ({
    type: Types.FETCH_AREA_ACTIVE_ALL,
    payload: {
        listcheck,
        active
    }
});

export const ac_deleteAllArea = (listcheck) => ({
    type: Types.FETCH_AREA_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_activeAllAreaSuccess = (list_id,active) => ({
    type: Types.FETCH_AREA_ACTIVE_ALL_SUCCESS,
    payload: {
        list_id,
        active
    }
});

