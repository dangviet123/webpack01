import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/recruitment/Vacancies';
import { ac_fetchVacanciesSuccess, 
    ac_fetchVacancies,
    ac_activeOneVacanciesSuccess, 
    ac_activeAllVacanciesSuccess 
} from '../../../actions/admincp/recruitment/Vacancies';
import { fetchVacanciesRequest,
    addVacanciesRequest,
    editVacanciesRequest,
    activeOneVacanciesRequest,
    activeAllVacanciesRequest, 
    deleteAllVacanciesRequest 
} from '../../../apis/admincp/recruitment/Vacancies';
import { submitForm, showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../../../helpers/toastHelper';
import {showModalDialogs, showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
function* fetchVacanciesSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchVacanciesRequest,new_params);
        const { datas } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchVacanciesSuccess(data,current_page,last_page,total));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* addVacanciesSaga({payload}) { // thêm mới
    const { data_add } = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(addVacanciesRequest,data_add);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchVacancies());
            toastSuccess(langs.add_successfully);
            yield put(showModalDialogs(false,"","",""));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(submitForm(false));
}


function* editVacanciesSaga({payload}) { // thêm mới
    const {idVacancies,value} = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(editVacanciesRequest,idVacancies, value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchVacancies());
            toastSuccess(langs.update_successfully);
            yield put(showModalDialogs(false,"","",""));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(submitForm(false));
}

function* activeOneVacanciesSaga({payload}) {
    const {idVacancies,active} = payload;
    try {
        const res = yield call(activeOneVacanciesRequest,idVacancies,{Active: active});
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeOneVacanciesSuccess(idVacancies,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}


function* activeAllVacanciesSaga({payload}) {
    const {active,listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idVacancies;
    });
    const data = {active,list_id};
    try {
        const res = yield call(activeAllVacanciesRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeAllVacanciesSuccess(list_id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function* deleteAllVacanciesSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idVacancies;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllVacanciesRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchVacancies());
            toastSuccess(langs.delete_successfully);
        }else{
            toastError(langs.update_successfully);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}
export function* VacanciesSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_VACANCIES,fetchVacanciesSaga),
        takeLatest(Types.FETCH_VACANCIES_CREATE,addVacanciesSaga),
        takeLatest(Types.FETCH_VACANCIES_UPDATE,editVacanciesSaga),
        takeLatest(Types.FETCH_VACANCIES_ACTIVE_ONE,activeOneVacanciesSaga),
        takeLatest(Types.FETCH_VACANCIES_ACTIVE_ALL,activeAllVacanciesSaga),
        takeLatest(Types.FETCH_VACANCIES_DELETE_ALL,deleteAllVacanciesSaga)
    ]);
}