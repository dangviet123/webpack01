import * as Types from '../../../constants/admincp/bgdata/Slider';

export const ac_fetchSlider = () => ({
    type: Types.FETCH_SLIDER
});


export const ac_fetchSliderSuccess = (datas,current_page,last_page,total) => ({
    type: Types.FETCH_SLIDER_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total
    }
});

export const ac_addSlider = data_add => ({
    type: Types.FETCH_SLIDER_CREATE,
    payload: {
        data_add
    }
});

export const ac_getEditSlider = idSlider => ({
    type: Types.FETCH_GET_SLIDER_UPDATE,
    payload: {
        idSlider
    }
});

export const ac_getEditSliderSuccess = edit => ({
    type: Types.FETCH_GET_SLIDER_UPDATE_SUCCESS,
    payload: {
        edit
    }
})

export const ac_editSlider = (idSlider,value) => ({
    type: Types.FETCH_SLIDER_UPDATE,
    payload: {
        idSlider,
        value
    }
});

export const ac_checkedOne = index => ({
    type: Types.FETCH_SLIDER_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_SLIDER_CHECKED_ALL,
    payload: {
        checkAll
    }
});

export const ac_activeOneSlider = (idSlider,active) => ({
    type: Types.FETCH_SLIDER_ACTIVE_ONE,
    payload: {
        idSlider,
        active
    }
});

export const ac_activeOneSliderSuccess = (idSlider,active) => ({
    type: Types.FETCH_SLIDER_ACTIVE_ONE_SUCCESS,
    payload: {
        idSlider,
        active
    }
});


export const ac_activeAllSlider = (listcheck,active) => ({
    type: Types.FETCH_SLIDER_ACTIVE_ALL,
    payload: {
        listcheck,
        active
    }
});

export const ac_deleteAllSlider = (listcheck) => ({
    type: Types.FETCH_SLIDER_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_activeAllSliderSuccess = (list_id,active) => ({
    type: Types.FETCH_SLIDER_ACTIVE_ALL_SUCCESS,
    payload: {
        list_id,
        active
    }
});

