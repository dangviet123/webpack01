import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/contacts/Map';
import { ac_fetchMapSuccess, 
    ac_fetchMap,
    ac_activeOneMapSuccess, 
    ac_activeAllMapSuccess 
} from '../../../actions/admincp/contacts/Map';
import { fetchMapRequest,
    addMapRequest,
    editMapRequest,
    activeOneMapRequest,
    activeAllMapRequest, 
    deleteAllMapRequest 
} from '../../../apis/admincp/contacts/Map';
import { submitForm, showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../../../helpers/toastHelper';
import {showModalDialogs, showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
function* fetchMapSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchMapRequest,new_params);
        const { datas } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchMapSuccess(data,current_page,last_page,total));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* addMapSaga({payload}) { // thêm mới
    const { data_add } = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(addMapRequest,data_add);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchMap());
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


function* editMapSaga({payload}) { // thêm mới
    const {idMap,value} = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(editMapRequest,idMap, value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchMap());
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

function* activeOneMapSaga({payload}) {
    const {idMap,active} = payload;
    try {
        const res = yield call(activeOneMapRequest,idMap,{Active: active});
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeOneMapSuccess(idMap,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}


function* activeAllMapSaga({payload}) {
    const {active,listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idMap;
    });
    const data = {active,list_id};
    try {
        const res = yield call(activeAllMapRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeAllMapSuccess(list_id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function* deleteAllMapSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idMap;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllMapRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchMap());
            toastSuccess(langs.delete_successfully);
        }else{
            toastError(langs.update_successfully);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}
export function* MapSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_MAP,fetchMapSaga),
        takeLatest(Types.FETCH_MAP_CREATE,addMapSaga),
        takeLatest(Types.FETCH_MAP_UPDATE,editMapSaga),
        takeLatest(Types.FETCH_MAP_ACTIVE_ONE,activeOneMapSaga),
        takeLatest(Types.FETCH_MAP_ACTIVE_ALL,activeAllMapSaga),
        takeLatest(Types.FETCH_MAP_DELETE_ALL,deleteAllMapSaga)
    ]);
}