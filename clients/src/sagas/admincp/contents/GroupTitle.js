import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/contents/GroupTitle';
import { ac_fetchGroupTitleSuccess, 
    ac_fetchGroupTitle,
    ac_activeOneGroupTitleSuccess, 
    ac_activeAllGroupTitleSuccess 
} from '../../../actions/admincp/contents/GroupTitle';
import { fetchGroupTitleRequest,
    addGroupTitleRequest,
    editGroupTitleRequest,
    activeOneGroupTitleRequest,
    activeAllGroupTitleRequest, 
    deleteAllGroupTitleRequest 
} from '../../../apis/admincp/contents/GroupTitle';
import { submitForm, showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../../../helpers/toastHelper';
import {showModalDialogs, showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
function* fetchGroupTitleSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchGroupTitleRequest,new_params);
        const { datas } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchGroupTitleSuccess(data,current_page,last_page,total));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* addGroupTitleSaga({payload}) { // thêm mới
    const { data_add } = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(addGroupTitleRequest,data_add);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchGroupTitle());
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


function* editGroupTitleSaga({payload}) { // thêm mới
    const {idGroupTitle,value} = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(editGroupTitleRequest,idGroupTitle, value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchGroupTitle());
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

function* activeOneGroupTitleSaga({payload}) {
    const {idGroupTitle,active} = payload;
    try {
        const res = yield call(activeOneGroupTitleRequest,idGroupTitle,{Active: active});
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeOneGroupTitleSuccess(idGroupTitle,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}


function* activeAllGroupTitleSaga({payload}) {
    const {active,listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idGroupTitle;
    });
    const data = {active,list_id};
    try {
        const res = yield call(activeAllGroupTitleRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeAllGroupTitleSuccess(list_id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function* deleteAllGroupTitleSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idGroupTitle;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllGroupTitleRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchGroupTitle());
            toastSuccess(langs.delete_successfully);
        }else{
            toastError(langs.update_successfully);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}
export function* GroupTitleSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_GROUP_TITLE,fetchGroupTitleSaga),
        takeLatest(Types.FETCH_GROUP_TITLE_CREATE,addGroupTitleSaga),
        takeLatest(Types.FETCH_GROUP_TITLE_UPDATE,editGroupTitleSaga),
        takeLatest(Types.FETCH_GROUP_TITLE_ACTIVE_ONE,activeOneGroupTitleSaga),
        takeLatest(Types.FETCH_GROUP_TITLE_ACTIVE_ALL,activeAllGroupTitleSaga),
        takeLatest(Types.FETCH_GROUP_TITLE_DELETE_ALL,deleteAllGroupTitleSaga)
    ]);
}