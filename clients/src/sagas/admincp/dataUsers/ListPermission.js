import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/dataUsers/ListPermission';
import { ac_fetchListPermissionSuccess, 
    ac_fetchListPermission,
    ac_activeOneListPermissionSuccess, 
    ac_activeAllListPermissionSuccess 
} from '../../../actions/admincp/dataUsers/ListPermission';
import { fetchListPermissionRequest,
    addListPermissionRequest,
    editListPermissionRequest,
    activeOneListPermissionRequest,
    activeAllListPermissionRequest, 
    deleteAllListPermissionRequest 
} from '../../../apis/admincp/dataUsers/ListPermission';
import { submitForm, showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../../../helpers/toastHelper';
import {showModalDialogs, showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
function* fetchListPermissionSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchListPermissionRequest,new_params);
        const { datas } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchListPermissionSuccess(data,current_page,last_page,total));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* addListPermissionSaga({payload}) { // thêm mới
    const { data_add } = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(addListPermissionRequest,data_add);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchListPermission());
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


function* editListPermissionSaga({payload}) { // thêm mới
    const {idListPermission,value} = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(editListPermissionRequest,idListPermission, value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchListPermission());
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

function* activeOneListPermissionSaga({payload}) {
    const {idListPermission,active} = payload;
    try {
        const res = yield call(activeOneListPermissionRequest,idListPermission,{Active: active});
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeOneListPermissionSuccess(idListPermission,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}


function* activeAllListPermissionSaga({payload}) {
    const {active,listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idListPermission;
    });
    const data = {active,list_id};
    try {
        const res = yield call(activeAllListPermissionRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeAllListPermissionSuccess(list_id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function* deleteAllListPermissionSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idListPermission;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllListPermissionRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchListPermission());
            toastSuccess(langs.delete_successfully);
        }else{
            toastError(langs.update_successfully);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}
export function* ListPermissionSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_LISTPERMISSION,fetchListPermissionSaga),
        takeLatest(Types.FETCH_LISTPERMISSION_CREATE,addListPermissionSaga),
        takeLatest(Types.FETCH_LISTPERMISSION_UPDATE,editListPermissionSaga),
        takeLatest(Types.FETCH_LISTPERMISSION_ACTIVE_ONE,activeOneListPermissionSaga),
        takeLatest(Types.FETCH_LISTPERMISSION_ACTIVE_ALL,activeAllListPermissionSaga),
        takeLatest(Types.FETCH_LISTPERMISSION_DELETE_ALL,deleteAllListPermissionSaga)
    ]);
}