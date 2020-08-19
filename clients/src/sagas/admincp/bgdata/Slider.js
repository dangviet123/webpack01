import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/bgdata/Slider';
import { ac_fetchSliderSuccess, 
    ac_fetchSlider,
    ac_activeOneSliderSuccess, 
    ac_activeAllSliderSuccess, 
    ac_getEditSliderSuccess
} from '../../../actions/admincp/bgdata/Slider';
import { 
    fetchSliderRequest,
    addSliderRequest,
    editSliderRequest,
    activeOneSliderRequest,
    activeAllSliderRequest, 
    deleteAllSliderRequest, 
    getEditSliderRequest
} from '../../../apis/admincp/bgdata/Slider';
import { submitForm,showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../../../helpers/toastHelper';
import {showModalDialogs, showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
import {go,push} from 'connected-react-router';
function* fetchSliderSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchSliderRequest,new_params);
        const { datas } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchSliderSuccess(data,current_page,last_page,total));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* addSliderSaga({payload}) { // thêm mới
    const { data_add } = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(addSliderRequest,data_add);
        const { Status } = res.data;
        if (Status === true) {
            yield put(go(-1));
            toastSuccess(langs.add_successfully);
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showModalDialogs(false,"","",""));
    yield put(submitForm(false));
}

function *getEditSliderSaga({payload}){ // lấy thông tin edit
    const {idSlider} = payload;
    yield put(showSubmit(true));
    try {
        const res = yield call(getEditSliderRequest,idSlider);
        const {Status,datas} = res.data;
        if (Status === true) {
            yield put(ac_getEditSliderSuccess(datas));
        }else if (Status === false) {
            yield put(push('/admincp'));
        }
    } catch (error) {
        console.log(error);
    }
    yield put(showSubmit(false));
}

function* editSliderSaga({payload}) { // cập nhật
    const {idSlider,value} = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(editSliderRequest,idSlider, value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(go(-1));
            toastSuccess(langs.update_successfully);
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showModalDialogs(false,"","",""));
    yield put(submitForm(false));
}

function* activeOneSliderSaga({payload}) {
    const {idSlider,active} = payload;
    try {
        const res = yield call(activeOneSliderRequest,idSlider,{Active: active});
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeOneSliderSuccess(idSlider,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}


function* activeAllSliderSaga({payload}) {
    const {active,listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idSlider;
    });
    const data = {active,list_id};
    try {
        const res = yield call(activeAllSliderRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeAllSliderSuccess(list_id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function* deleteAllSliderSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idSlider;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllSliderRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchSlider());
            toastSuccess(langs.delete_successfully);
        }else{
            toastError(langs.update_successfully);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}
export function* SliderSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_SLIDER,fetchSliderSaga),
        takeLatest(Types.FETCH_SLIDER_CREATE,addSliderSaga),
        takeLatest(Types.FETCH_GET_SLIDER_UPDATE,getEditSliderSaga),
        takeLatest(Types.FETCH_SLIDER_UPDATE,editSliderSaga),
        takeLatest(Types.FETCH_SLIDER_ACTIVE_ONE,activeOneSliderSaga),
        takeLatest(Types.FETCH_SLIDER_ACTIVE_ALL,activeAllSliderSaga),
        takeLatest(Types.FETCH_SLIDER_DELETE_ALL,deleteAllSliderSaga)
    ]);
}