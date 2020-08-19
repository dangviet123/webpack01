import * as Types from '../../../constants/admincp/recruitment/Vacancies';

export const ac_fetchVacancies = () => ({
    type: Types.FETCH_VACANCIES
});


export const ac_fetchVacanciesSuccess = (datas,current_page,last_page,total) => ({
    type: Types.FETCH_VACANCIES_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total
    }
});

export const ac_addVacancies = data_add => ({
    type: Types.FETCH_VACANCIES_CREATE,
    payload: {
        data_add
    }
});

export const ac_editVacancies = (idVacancies,value) => ({
    type: Types.FETCH_VACANCIES_UPDATE,
    payload: {
        idVacancies,
        value
    }
});

export const ac_checkedOne = index => ({
    type: Types.FETCH_VACANCIES_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_VACANCIES_CHECKED_ALL,
    payload: {
        checkAll
    }
});

export const ac_activeOneVacancies = (idVacancies,active) => ({
    type: Types.FETCH_VACANCIES_ACTIVE_ONE,
    payload: {
        idVacancies,
        active
    }
});

export const ac_activeOneVacanciesSuccess = (idVacancies,active) => ({
    type: Types.FETCH_VACANCIES_ACTIVE_ONE_SUCCESS,
    payload: {
        idVacancies,
        active
    }
});


export const ac_activeAllVacancies = (listcheck,active) => ({
    type: Types.FETCH_VACANCIES_ACTIVE_ALL,
    payload: {
        listcheck,
        active
    }
});

export const ac_deleteAllVacancies = (listcheck) => ({
    type: Types.FETCH_VACANCIES_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_activeAllVacanciesSuccess = (list_id,active) => ({
    type: Types.FETCH_VACANCIES_ACTIVE_ALL_SUCCESS,
    payload: {
        list_id,
        active
    }
});

