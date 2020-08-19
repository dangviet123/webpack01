import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/contacts/Support';
import { ac_fetchSupportSuccess, 
    ac_fetchSupport,
    ac_showDetailSupportSuccess
} from '../../../actions/admincp/contacts/Support';
import { fetchSupportRequest,
    deleteAllSupportRequest,
    checkProcessOneRequest,
    checkProcessAllRequest ,
    showDetailSupportRequest
} from '../../../apis/admincp/contacts/Support';
import { showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess,toastWarning } from '../../../helpers/toastHelper';
import {showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
function* fetchSupportSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchSupportRequest,new_params);
        const { datas } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchSupportSuccess(data,current_page,last_page,total));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* deleteAllSupportSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idSupport;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllSupportRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchSupport());
            toastSuccess(langs.delete_successfully);
        }else{
            toastError(langs.update_successfully);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function *showDetailSupportSaga({payload}) {
    const {idSupport} = payload;
    try {
        const res = yield call(showDetailSupportRequest,idSupport);
        const {Status,ListDetail} = res.data;
        if (Status === true) {
            yield put(ac_showDetailSupportSuccess(ListDetail));
        }
    } catch (error) {
        console.log(error)
    }
}

function *checkProcessOneSaga({payload}) {
    const {idSupport} = payload;
    try {
        const res = yield call(checkProcessOneRequest,idSupport);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchSupport());
            toastSuccess(langs.process_support_success);
        }else if (Status === false) {
            toastWarning(langs.support_proces_check);
            yield put(ac_fetchSupport());
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        console.log(error);
    }
    yield put(showConfirmAlert(false,null,null));
}
function *checkProcessAlllSaga({payload}) {
    const {listcheck} = payload;
    try {
        const res = yield call(checkProcessAllRequest,listcheck);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchSupport());
            toastSuccess(langs.process_support_success);
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        console.log(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

export function* SupportSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_SUPPORT,fetchSupportSaga),
        takeLatest(Types.CHECK_PROCESS_SUPPORT_ONE,checkProcessOneSaga),
        takeLatest(Types.CHECK_PROCESS_SUPPORT_ALL,checkProcessAlllSaga),
        takeLatest(Types.SHOW_DETAIL_SUPPORT,showDetailSupportSaga),
        takeLatest(Types.FETCH_SUPPORT_DELETE_ALL,deleteAllSupportSaga)
    ]);
}