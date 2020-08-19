import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/ContactSupport/Contact';
import { 
    fetchContactRequest, 
    addContactRequest
 }  from '../../../apis/public/ContactSupport/Contact';
import { ac_fetchSlideSuccess } from '../../../actions/public/Home/Header';
import { submitForm } from '../../../actions/login/login';
import * as langs from '../../../constants/admincp/languages';
import { push } from 'connected-react-router';
import { toastSuccess, toastError } from '../../../helpers/toastHelper';
function* fetchContactSaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    try {
        const res = yield call(fetchContactRequest,`?SlungMenu=${pathname}`);
        const { datas } = res.data;
        const {DataSlide} = datas;
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}
function *addContactSaga({payload}) {
    const {datas} = payload;
    yield put(submitForm(true));
    try {
        const res = yield call(addContactRequest,datas);
        const {Status} = res.data;
        if (Status === true) {
            toastSuccess(langs.contact_success);
            yield put(push('/'));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        console.log(error);
    }
    yield put(submitForm(false));
}


export function* ContactSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_CONTACT,fetchContactSaga),
        takeLatest(Types.ADD_CONTACT,addContactSaga)
    ]);
}