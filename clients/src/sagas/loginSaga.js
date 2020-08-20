import { takeLatest,all, call, put, delay } from 'redux-saga/effects';
import * as logins from '../constants/login/login';
import { requestLogin,requestPassWord,requestchangePassWord,requestCheckToken } from '../apis/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../helpers/toastHelper';
import { showSubmit } from './../actions/login/login';
import { push } from 'connected-react-router';
function* checkLogin({payload}) { // đăng nhập
    const { checkLogin } = payload;
    try {
        yield put(showSubmit(true));
        const res =  yield call(requestLogin,checkLogin);
        const { data } = res;
        const { Status,...rememToken } = data;
        if (data.Status === false) {
            yield delay(400);
            yield put(showSubmit(false));
            toastError(' Tên đăng nhập hoặc mật khẩu không đúng !');
        }else if(data.Status === true){
            localStorage.setItem('rememToken',JSON.stringify(rememToken)); // set token lưu tại máy người dùng
            yield delay(400);
            yield put(showSubmit(false));
            window.location.href = '/admincp';
        }else{
            yield delay(400);
            yield put(showSubmit(false));
            toastError(' Có lỗi trong quá trình vui lòng thử lại !');
        }
    } catch (error) {
        yield put(showSubmit(false));
        toastErrorNetWork(error);
    }
}

function* resetPassWord({payload}) {
    const {email} = payload;
    try {
        yield put(showSubmit(true));
        const res =  yield call(requestPassWord,email);
        const { data } = res;
        const { Status,message } = data;
        if (Status === true) {
            yield delay(400);
            yield put(showSubmit(false));
            toastSuccess(" Yêu cầu đã được gửi đi, vui lòng check email để thay đổi mật khẩu");
            yield put(push('/admincp/login'));

        }else if (Status === false) {
            yield delay(400);
            yield put(showSubmit(false));
            toastError(message);
        }else{
            yield delay(400);
            yield put(showSubmit(false));
            toastError(' Có lỗi trong quá trình vui lòng thử lại !');
        }
    } catch (error) {
        yield put(showSubmit(false));
        toastErrorNetWork(error);
    }
}


function* changePassWord({payload}) { // đổi mật khẩu
    const { checkReset } = payload;
    try {
        yield put(showSubmit(true));
        const res =  yield call(requestchangePassWord,checkReset);
        const { data } = res;
        const { Status,message } = data;
        if (Status === true) {
            yield delay(400);
            yield put(showSubmit(false));
            toastSuccess(" Mật khẩu của bạn đã được thay đổi thành công");
            yield put(push('/admincp/login'));

        }else if (Status === false) {
            yield delay(400);
            yield put(showSubmit(false));
            toastError(message);
        }else{
            yield delay(400);
            yield put(showSubmit(false));
            toastError(' Có lỗi trong quá trình vui lòng thử lại !');
        }
    } catch (error) {
        yield put(showSubmit(false));
        toastErrorNetWork(error);
    }
}

function* checkToken({payload}){

    try {
        yield put(showSubmit(true));
        const res =  yield call(requestCheckToken,payload);
        const { data } = res;
        const { Status } = data;
        if (Status === true) {
            yield delay(400);
            yield put(showSubmit(false));
        }else if (Status === false) {
            yield delay(400);
            yield put(showSubmit(false));
            yield put(push('/admincp/login'));
        }else{
            yield delay(400);
            yield put(showSubmit(false));
            yield put(push('/admincp/login'));
        }
    } catch (error) {
        yield put(showSubmit(false));
        yield put(push('/admincp/login'));
    }
}

export function* loginSagas() {
    yield all([
        takeLatest(logins.REQUEST_LOGIN,checkLogin),
        takeLatest(logins.REQUEST_RESETPASS,resetPassWord),
        takeLatest(logins.REQUEST_CHANGEPASS,changePassWord),
        takeLatest(logins.REQUEST_CHECKTOKEN,checkToken)
    ]);
}