import { takeLatest,all, call, put } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/home/Dashboard';
import { ac_fetchDashboardSuccess
} from '../../../actions/admincp/home/Dashboard';
import { 
    fetchDashboardRequest,
    changePassWordRequest,
    fetchLogOutRequest
} from '../../../apis/admincp/home/Dashboard';
import { toastError, toastSuccess,toastWarning } from '../../../helpers/toastHelper';
import * as langs from '../../../constants/admincp/languages';
import { showModalDialogs } from '../../../actions/admincp/ModalDialogs';
import { submitForm } from '../../../actions/login/login';
import { push } from 'connected-react-router';
function* fetchDashboardSaga() {
    try {
        const res = yield call(fetchDashboardRequest);
        const { Status,...reData } = res.data;
        if (Status === true) {
            yield put(ac_fetchDashboardSuccess(reData));
        }
    } catch (error) {
        console.log(error);
    }
}

function *fetchLogOutSaga() {
    try {
        yield call(fetchLogOutRequest());
    } catch (error) {
        console.log(error);
    }
    localStorage.removeItem('rememToken');
    sessionStorage.removeItem('ListSideBar');
    sessionStorage.removeItem('defaultExpanded');
    yield put(push('/admincp/login'));
}

function *changePassWordSaga({payload}) { // thay đổi mật khẩu
    const {value} = payload;
    yield put(submitForm(true));
    try {
        const res = yield call(changePassWordRequest,value);
        const {Status} = res.data;
        if (Status === true) {
            toastSuccess(langs.change_password_success);
            yield put(showModalDialogs(false,"","",""));
        }else if (Status === false) {
            toastWarning(langs.check_password);
        }else {
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        console.log(error);
    }
    yield put(submitForm(false));
}

export function* DashboardSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_DASHBOARD,fetchDashboardSaga),
        takeLatest(Types.CHANGE_PASSWORD_HOME,changePassWordSaga),
        takeLatest(Types.FETCH_LOGOUT,fetchLogOutSaga)
        
    ]);
}