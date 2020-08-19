import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/bgdata/MenuType';
import { ac_fetchMenuTypeSuccess, 
    ac_fetchMenuType,
    ac_activeOneMenuTypeSuccess, 
    ac_activeAllMenuTypeSuccess,
    ac_getMenuSuccess,
    ac_checkSlugSuccess,
    ac_getListCategorySuccess,
    ac_getMenu,
    ac_loadPermissionSuccess
} from '../../../actions/admincp/bgdata/MenuType';
import { fetchMenuTypeRequest,
    addMenuTypeRequest,
    editMenuTypeRequest,
    activeOneMenuTypeRequest,
    activeAllMenuTypeRequest, 
    deleteAllMenuTypeRequest,
    getMenuRequest,
    checkSlugRequest,
    getListCategoryRequest,
    addMenuRequest,
    editMenuRequest,
    activeMenuRequest,
    deleteMenuRequest,
    changeMenuRequest,
    loadPermissionRequest,
    savePermissionRequest
} from '../../../apis/admincp/bgdata/MenuType';
import { submitForm,showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../../../helpers/toastHelper';
import {showModalDialogs, showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
import { push } from 'connected-react-router';
function* fetchMenuTypeSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchMenuTypeRequest,new_params);
        const { datas } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchMenuTypeSuccess(data,current_page,last_page,total));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* addMenuTypeSaga({payload}) { // thêm mới
    const { data_add } = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(addMenuTypeRequest,data_add);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchMenuType());
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


function* editMenuTypeSaga({payload}) { // thêm mới
    const {idTypeMenu,value} = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(editMenuTypeRequest,idTypeMenu, value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchMenuType());
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

function* activeOneMenuTypeSaga({payload}) {
    const {idTypeMenu,active} = payload;
    try {
        const res = yield call(activeOneMenuTypeRequest,idTypeMenu,{Active: active});
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeOneMenuTypeSuccess(idTypeMenu,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}


function* activeAllMenuTypeSaga({payload}) {
    const {active,listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idTypeMenu;
    });
    const data = {active,list_id};
    try {
        const res = yield call(activeAllMenuTypeRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeAllMenuTypeSuccess(list_id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function* deleteAllMenuTypeSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idTypeMenu;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllMenuTypeRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchMenuType());
            toastSuccess(langs.delete_successfully);
        }else{
            toastError(langs.update_successfully);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

// xử lý phần menu

function *getMenuSaga({payload}) {
    const {idTypeMenu} = payload;
    try {
        yield put(showSubmit(true));
        const res = yield call(getMenuRequest,idTypeMenu);
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

function * checkSlugSaga({payload}) {
    try {
        const res = yield call(checkSlugRequest, payload);
        const { Status } = res.data;
        yield put(ac_checkSlugSuccess(Status));
    } catch (error) {
        console.log(error);
    }
}

function *getListCategory({payload}){
    const {idTypeMenu} = payload;
    try {
        const res = yield call(getListCategoryRequest, idTypeMenu);
        const { datas } = res.data;
        yield put(ac_getListCategorySuccess(datas));
    } catch (error) {
        console.log(error);
    }
}

function *addMenuSaga({payload}){ // thêm mới menu
    const {value} = payload;
    const {idTypeMenu} = value;
    yield put(submitForm(true));
    try {
        const res = yield call(addMenuRequest,value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_getMenu(idTypeMenu));
            toastSuccess(langs.add_successfully);
            yield put(showModalDialogs(false,"","",""));
        }else if(Status === false){
            yield put(ac_checkSlugSuccess(false));
        }
        else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(submitForm(false));
}

function *editMenuSaga({payload}) {
    const {value} = payload;
    const {idTypeMenu} = value;
    yield put(submitForm(true));
    try {
        const res = yield call(editMenuRequest,value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_getMenu(idTypeMenu));
            toastSuccess(langs.add_successfully);
            yield put(showModalDialogs(false,"","",""));
        }else if(Status === false){
            yield put(ac_checkSlugSuccess(false));
        }
        else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(submitForm(false));
}

function *activeMenuSaga({payload}) {
    const {data} = payload;
    const {idMenu,idTypeMenu} = data;
    try {
        const res = yield call(activeMenuRequest,idMenu,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_getMenu(idTypeMenu));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}

function *deleteMenuSaga({payload}) {
    const {idMenu,idTypeMenu} = payload;
    try {
        const res = yield call(deleteMenuRequest,idMenu);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_getMenu(idTypeMenu));
        }else if (Status === false) { // trường hợp tồn tại mục con
            toastError(langs.delete_children);
        }
        else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}

// handle menu
function *changeMenuSaga({payload}) {
    yield put(showSubmit(true));
    try {
        yield call(changeMenuRequest,payload);
    } catch (error) {
        console.log(error);
    }
    yield put(showSubmit(false));
}


// load danh sách quyền
function *loadPermissionSaga({payload}) {
    const {idMenu} = payload;
    try {
        const res = yield call(loadPermissionRequest, idMenu);
        const { datas } = res.data;
        yield put(ac_loadPermissionSuccess(datas));
    } catch (error) {
        console.log(error);
    }
}


function *savePermissionSaga({payload}) { // phân quyền
    const {data} = payload;
    const {idTypeMenu,...remData} = data;
    yield put(submitForm(true));
    try {
        const res = yield call(savePermissionRequest,remData);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_getMenu(idTypeMenu));
            yield put(showModalDialogs(false,"","",""));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(submitForm(false));
}

export function* MenuTypeSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_MENUTYPE,fetchMenuTypeSaga),
        takeLatest(Types.FETCH_MENUTYPE_CREATE,addMenuTypeSaga),
        takeLatest(Types.FETCH_MENUTYPE_UPDATE,editMenuTypeSaga),
        takeLatest(Types.FETCH_MENUTYPE_ACTIVE_ONE,activeOneMenuTypeSaga),
        takeLatest(Types.FETCH_MENUTYPE_ACTIVE_ALL,activeAllMenuTypeSaga),
        takeLatest(Types.FETCH_MENUTYPE_DELETE_ALL,deleteAllMenuTypeSaga),
        takeLatest(Types.GET_MENU,getMenuSaga),
        takeLatest(Types.CHECK_SLUG,checkSlugSaga),
        takeLatest(Types.GET_LIST_CATEGORY,getListCategory),
        takeLatest(Types.ADD_MENU,addMenuSaga),
        takeLatest(Types.EDIT_MENU,editMenuSaga),
        takeLatest(Types.ACTIVE_MENU,activeMenuSaga),
        takeLatest(Types.DELETE_MENU,deleteMenuSaga),
        takeLatest(Types.CHANGE_MENU,changeMenuSaga),
        takeLatest(Types.LOAD_PERMISION,loadPermissionSaga),
        takeLatest(Types.SAVE_PERMISSION,savePermissionSaga),
    ]);
}