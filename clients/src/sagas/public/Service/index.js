import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/Service';
import { ac_fetchServiceSuccess, 
    ac_fetchServiceDetailSuccess } from '../../../actions/public/Service';
import { fetchServiceRequest,
    fetchServiceDetailRequest
 }  from '../../../apis/public/Service';
import { ac_fetchSlideSuccess, 
    ac_fetchSlidePostsSuccess } from '../../../actions/public/Home/Header';
function* fetchServiceSaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    try {
        const res = yield call(fetchServiceRequest,`?SlungMenu=${pathname}`);
        const { datas } = res.data;
        const {DataSlide} = datas;
        yield put(ac_fetchServiceSuccess(datas));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}

function *fetchServiceDetailSaga({payload}) {
    const {Slug} = payload;
    try {
        const res = yield call(fetchServiceDetailRequest,`?Slug=${Slug}`);
        const {DataSlide,Detail,DataImageSlide} = res.data;
        yield put(ac_fetchServiceDetailSuccess(Detail));
        yield put(ac_fetchSlideSuccess(DataSlide));
        yield put(ac_fetchSlidePostsSuccess(DataImageSlide));
    } catch (error) {
        console.log(error);
    }
}

export function* ServiceSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_SERVICE,fetchServiceSaga),
        takeLatest(Types.FETCH_SERVICE_DETAIL,fetchServiceDetailSaga)
    ]);
}