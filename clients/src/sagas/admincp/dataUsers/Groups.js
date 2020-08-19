import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/dataUsers/Groups';
import { ac_fetchGroupsSuccess, 
    ac_fetchGroups,
    ac_activeOneGroupsSuccess, 
    ac_activeAllGroupsSuccess, 
    ac_getMenuSuccess,
    ac_loadPermissionSuccess,
    ac_getMenu
} from '../../../actions/admincp/dataUsers/Groups';
import { fetchGroupsRequest,
    addGroupsRequest,
    editGroupsRequest,
    activeOneGroupsRequest,
    activeAllGroupsRequest, 
    deleteAllGroupsRequest, 
    getMenuRequest,
    loadPermissionRequest,
    savePermissionRequest,
    activePermissionRequest
} from '../../../apis/admincp/dataUsers/Groups';
import { submitForm, showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../../../helpers/toastHelper';
import {showModalDialogs, showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
import { push } from 'connected-react-router';
function* fetchGroupsSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchGroupsRequest,new_params);
        const { datas } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchGroupsSuccess(data,current_page,last_page,total));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* addGroupsSaga({payload}) { // thêm mới
    const { data_add } = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(addGroupsRequest,data_add);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchGroups());
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


function* editGroupsSaga({payload}) { // thêm mới
    const {idGroups,value} = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(editGroupsRequest,idGroups, value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchGroups());
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

function* activeOneGroupsSaga({payload}) {
    const {idGroups,active} = payload;
    try {
        const res = yield call(activeOneGroupsRequest,idGroups,{Active: active});
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeOneGroupsSuccess(idGroups,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}


function* activeAllGroupsSaga({payload}) {
    const {active,listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idGroups;
    });
    const data = {active,list_id};
    try {
        const res = yield call(activeAllGroupsRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeAllGroupsSuccess(list_id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function* deleteAllGroupsSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idGroups;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllGroupsRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchGroups());
            toastSuccess(langs.delete_successfully);
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}


// phân quyền

function *groupGetMenuSaga({payload}) {

    const {idTypeMenu,idGroups} = payload;
    try {
        yield put(showSubmit(true));
        const res = yield call(getMenuRequest,idGroups,idTypeMenu);
        const { datas,Status } = res.data;
        if (Status === true) {
            yield put(ac_getMenuSuccess(datas));
        }else if (Status === false) {
            yield put(push("/admincp"));
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}


// load danh sách quyền
function *loadPermissionSaga({payload}) {
    const {idMenu,idGroups} = payload;
    try {
        const res = yield call(loadPermissionRequest, idMenu,idGroups);
        const { datas } = res.data;
        yield put(ac_loadPermissionSuccess(datas));
    } catch (error) {
        console.log(error);
    }
}

function *savePermissionSaga({payload}) { // phân quyền
    const {data} = payload;
    const {idTypeMenu,idGroups} = data;
    yield put(submitForm(true));
    try {
        const res = yield call(savePermissionRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_getMenu(idGroups,idTypeMenu));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showModalDialogs(false,"","",""));
    yield put(submitForm(false));
}

function *activePermissionSaga({payload}){
    const {data} = payload;
    const {idTypeMenu,idGroups} = data;

    try {
        const res = yield call(activePermissionRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_getMenu(idGroups,idTypeMenu));
            toastSuccess(langs.update_successfully);
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}


export function* GroupsSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_GROUPS,fetchGroupsSaga),
        takeLatest(Types.FETCH_GROUPS_CREATE,addGroupsSaga),
        takeLatest(Types.FETCH_GROUPS_UPDATE,editGroupsSaga),
        takeLatest(Types.FETCH_GROUPS_ACTIVE_ONE,activeOneGroupsSaga),
        takeLatest(Types.FETCH_GROUPS_ACTIVE_ALL,activeAllGroupsSaga),
        takeLatest(Types.FETCH_GROUPS_DELETE_ALL,deleteAllGroupsSaga),
        takeLatest(Types.GROUP_GET_MENU,groupGetMenuSaga),
        takeLatest(Types.GROUP_LOAD_PERMISION,loadPermissionSaga),
        takeLatest(Types.GROUP_SAVE_PERMISSION,savePermissionSaga),
        takeLatest(Types.GROUP_ACTIVE_MENU,activePermissionSaga)
    ]);
}