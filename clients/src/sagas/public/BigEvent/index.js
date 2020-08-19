import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/BigEvent';
import { ac_fetchBigEventSuccess } from '../../../actions/public/BigEvent';
import { fetchBigEventRequest
 }  from '../../../apis/public/BigEvent';
import { ac_fetchSlideSuccess } from '../../../actions/public/Home/Header';
function* fetchBigEventSaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    try {
        const res = yield call(fetchBigEventRequest,`?SlungMenu=${pathname}`);
        const { datas } = res.data;
        const {DataSlide} = datas;
        yield put(ac_fetchBigEventSuccess(datas));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}


export function* BigEventSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_BIGEVENT,fetchBigEventSaga)
    ]);
}