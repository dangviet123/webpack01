import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/recruitment/Area';
import { ac_fetchAreaSuccess, 
    ac_fetchArea,
    ac_activeOneAreaSuccess, 
    ac_activeAllAreaSuccess 
} from '../../../actions/admincp/recruitment/Area';
import { fetchAreaRequest,
    addAreaRequest,
    editAreaRequest,
    activeOneAreaRequest,
    activeAllAreaRequest, 
    deleteAllAreaRequest 
} from '../../../apis/admincp/recruitment/Area';
import { submitForm, showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../../../helpers/toastHelper';
import {showModalDialogs, showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
function* fetchAreaSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchAreaRequest,new_params);
        const { datas } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchAreaSuccess(data,current_page,last_page,total));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* addAreaSaga({payload}) { // thêm mới
    const { data_add } = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(addAreaRequest,data_add);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchArea());
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


function* editAreaSaga({payload}) { // thêm mới
    const {idArea,value} = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(editAreaRequest,idArea, value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchArea());
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

function* activeOneAreaSaga({payload}) {
    const {idArea,active} = payload;
    try {
        const res = yield call(activeOneAreaRequest,idArea,{Active: active});
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeOneAreaSuccess(idArea,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}


function* activeAllAreaSaga({payload}) {
    const {active,listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idArea;
    });
    const data = {active,list_id};
    try {
        const res = yield call(activeAllAreaRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeAllAreaSuccess(list_id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function* deleteAllAreaSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idArea;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllAreaRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchArea());
            toastSuccess(langs.delete_successfully);
        }else{
            toastError(langs.update_successfully);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}
export function* AreaSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_AREA,fetchAreaSaga),
        takeLatest(Types.FETCH_AREA_CREATE,addAreaSaga),
        takeLatest(Types.FETCH_AREA_UPDATE,editAreaSaga),
        takeLatest(Types.FETCH_AREA_ACTIVE_ONE,activeOneAreaSaga),
        takeLatest(Types.FETCH_AREA_ACTIVE_ALL,activeAllAreaSaga),
        takeLatest(Types.FETCH_AREA_DELETE_ALL,deleteAllAreaSaga)
    ]);
}