import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/bgdata/Steps';
import { ac_fetchStepsSuccess, 
    ac_fetchSteps,
    ac_activeOneStepsSuccess, 
    ac_activeAllStepsSuccess, 
    ac_getEditStepsSuccess
} from '../../../actions/admincp/bgdata/Steps';
import { 
    fetchStepsRequest,
    addStepsRequest,
    editStepsRequest,
    activeOneStepsRequest,
    activeAllStepsRequest, 
    deleteAllStepsRequest, 
    getEditStepsRequest
} from '../../../apis/admincp/bgdata/Steps';
import { submitForm,showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../../../helpers/toastHelper';
import {showModalDialogs, showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
import {go,push} from 'connected-react-router';
function* fetchStepsSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchStepsRequest,new_params);
        const { datas } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchStepsSuccess(data,current_page,last_page,total));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* addStepsSaga({payload}) { // thêm mới
    const { data_add } = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(addStepsRequest,data_add);
        const { Status } = res.data;
        if (Status === true) {
            yield put(go(-1));
            toastSuccess(langs.add_successfully);
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showModalDialogs(false,"","",""));
    yield put(submitForm(false));
}

function *getEditStepsSaga({payload}){ // lấy thông tin edit
    const {idSteps} = payload;
    yield put(showSubmit(true));
    try {
        const res = yield call(getEditStepsRequest,idSteps);
        const {Status,datas} = res.data;
        if (Status === true) {
            yield put(ac_getEditStepsSuccess(datas));
        }else if (Status === false) {
            yield put(push('/admincp'));
        }
    } catch (error) {
        console.log(error);
    }
    yield put(showSubmit(false));
}

function* editStepsSaga({payload}) { // cập nhật
    const {idSteps,value} = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(editStepsRequest,idSteps, value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(go(-1));
            toastSuccess(langs.update_successfully);
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showModalDialogs(false,"","",""));
    yield put(submitForm(false));
}

function* activeOneStepsSaga({payload}) {
    const {idSteps,active} = payload;
    try {
        const res = yield call(activeOneStepsRequest,idSteps,{Active: active});
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeOneStepsSuccess(idSteps,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}


function* activeAllStepsSaga({payload}) {
    const {active,listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idSteps;
    });
    const data = {active,list_id};
    try {
        const res = yield call(activeAllStepsRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeAllStepsSuccess(list_id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function* deleteAllStepsSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idSteps;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllStepsRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchSteps());
            toastSuccess(langs.delete_successfully);
        }else{
            toastError(langs.update_successfully);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}
export function* StepsSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_STEPS,fetchStepsSaga),
        takeLatest(Types.FETCH_STEPS_CREATE,addStepsSaga),
        takeLatest(Types.FETCH_GET_STEPS_UPDATE,getEditStepsSaga),
        takeLatest(Types.FETCH_STEPS_UPDATE,editStepsSaga),
        takeLatest(Types.FETCH_STEPS_ACTIVE_ONE,activeOneStepsSaga),
        takeLatest(Types.FETCH_STEPS_ACTIVE_ALL,activeAllStepsSaga),
        takeLatest(Types.FETCH_STEPS_DELETE_ALL,deleteAllStepsSaga)
    ]);
}