import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/dataUsers/Users';
import { ac_fetchUsersSuccess, 
    ac_fetchUsers,
    ac_activeOneUsersSuccess, 
    ac_activeAllUsersSuccess,
    ac_checkUserNameSuccess,
    ac_checkEmailSuccess, 
    ac_fetchListGroupSuccess} from '../../../actions/admincp/dataUsers/Users';
import { fetchUsersRequest,
    addUsersRequest,
    editUsersRequest,
    activeOneUsersRequest,
    activeAllUsersRequest, 
    deleteAllUsersRequest,
    checkUserNameRequest,
    checkEmailRequest,
    fetchGroupsRequest
} from '../../../apis/admincp/dataUsers/Users';
import { submitForm, showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../../../helpers/toastHelper';
import {showModalDialogs, showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
function* fetchUsersSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchUsersRequest,new_params);
        const { datas } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchUsersSuccess(data,current_page,last_page,total));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* addUsersSaga({payload}) { // thêm mới
    const { data_add } = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(addUsersRequest,data_add);
        const { Status } = res.data;
        if (Status === true) {
            yield put(showModalDialogs(false,"","",""));
            yield put(ac_fetchUsers());
            toastSuccess(langs.add_successfully);
            
        }else if (Status === false) {
            const {colum} = res.data;
            if (colum === 'email') {
                yield put(ac_checkEmailSuccess(false));
            }else if (colum === 'username') {
                yield put(ac_checkUserNameSuccess(false));
            }
        }
        else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(submitForm(false));
}


function* editUsersSaga({payload}) { // thêm mới
    const {id,value} = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(editUsersRequest,id, value);
        const { Status } = res.data;

        if (Status === true) {
            yield put(showModalDialogs(false,"","",""));
            yield put(ac_fetchUsers());
            toastSuccess(langs.update_successfully);
        }else if (Status === false) {
            const {colum} = res.data;
            if (colum === 'email') {
                yield put(ac_checkEmailSuccess(false));
            }else if (colum === 'username') {
                yield put(ac_checkUserNameSuccess(false));
            }
        }
        else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(submitForm(false));

}

function* activeOneUsersSaga({payload}) {
    const {id,active} = payload;
    try {
        const res = yield call(activeOneUsersRequest,id,{Active: active});
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess('Cập nhật thành công !');
            yield put(ac_activeOneUsersSuccess(id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}


function* activeAllUsersSaga({payload}) {
    const {active,listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.id;
    });
    const data = {active,list_id};
    try {
        const res = yield call(activeAllUsersRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess('Cập nhật thành công !');
            yield put(ac_activeAllUsersSuccess(list_id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));

}

function* deleteAllUsersSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.id;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllUsersRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchUsers());
            toastSuccess('Xóa thành công !');
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
    
}


// check user tồn tại hệ thống

function* checkUserNameSage({payload}) {
    try {
        const res = yield call(checkUserNameRequest, payload);
        const { Status } = res.data;
        yield put(ac_checkUserNameSuccess(Status));
    } catch (error) {
        console.log(error);
    }
}


function* checkEmailSage({payload}) { // check email
    try {
        const res = yield call(checkEmailRequest, payload);
        const { Status } = res.data;
        yield put(ac_checkEmailSuccess(Status));
    } catch (error) {
        console.log(error);
    }
}
//fetchGroupsRequest
function *fetchGroupsSaga() {
    try {
        const res = yield call(fetchGroupsRequest);
        const {datas} = res.data;
        yield put(ac_fetchListGroupSuccess(datas));
    } catch (error) {
        console.log(error);
    }
}
export function* UsersSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_USERS,fetchUsersSaga),
        takeLatest(Types.FETCH_USERS_CREATE,addUsersSaga),
        takeLatest(Types.FETCH_USERS_UPDATE,editUsersSaga),
        takeLatest(Types.FETCH_USERS_ACTIVE_ONE,activeOneUsersSaga),
        takeLatest(Types.FETCH_USERS_ACTIVE_ALL,activeAllUsersSaga),
        takeLatest(Types.FETCH_USERS_DELETE_ALL,deleteAllUsersSaga),
        takeLatest(Types.FETCH_USERNAME_CHECK_UNIQUE,checkUserNameSage),
        takeLatest(Types.FETCH_EMAIL_CHECK_UNIQUE,checkEmailSage),
        takeLatest(Types.FETCH_LIST_GROUP,fetchGroupsSaga)
    ]);
}