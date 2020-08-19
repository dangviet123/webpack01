import * as Types from '../../../constants/admincp/bgdata/Steps';

export const ac_fetchSteps = () => ({
    type: Types.FETCH_STEPS
});


export const ac_fetchStepsSuccess = (datas,current_page,last_page,total) => ({
    type: Types.FETCH_STEPS_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total
    }
});

export const ac_addSteps = data_add => ({
    type: Types.FETCH_STEPS_CREATE,
    payload: {
        data_add
    }
});

export const ac_getEditSteps = idSteps => ({
    type: Types.FETCH_GET_STEPS_UPDATE,
    payload: {
        idSteps
    }
});

export const ac_getEditStepsSuccess = edit => ({
    type: Types.FETCH_GET_STEPS_UPDATE_SUCCESS,
    payload: {
        edit
    }
})

export const ac_editSteps = (idSteps,value) => ({
    type: Types.FETCH_STEPS_UPDATE,
    payload: {
        idSteps,
        value
    }
});

export const ac_checkedOne = index => ({
    type: Types.FETCH_STEPS_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_STEPS_CHECKED_ALL,
    payload: {
        checkAll
    }
});

export const ac_activeOneSteps = (idSteps,active) => ({
    type: Types.FETCH_STEPS_ACTIVE_ONE,
    payload: {
        idSteps,
        active
    }
});

export const ac_activeOneStepsSuccess = (idSteps,active) => ({
    type: Types.FETCH_STEPS_ACTIVE_ONE_SUCCESS,
    payload: {
        idSteps,
        active
    }
});


export const ac_activeAllSteps = (listcheck,active) => ({
    type: Types.FETCH_STEPS_ACTIVE_ALL,
    payload: {
        listcheck,
        active
    }
});

export const ac_deleteAllSteps = (listcheck) => ({
    type: Types.FETCH_STEPS_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_activeAllStepsSuccess = (list_id,active) => ({
    type: Types.FETCH_STEPS_ACTIVE_ALL_SUCCESS,
    payload: {
        list_id,
        active
    }
});

