import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/CareerOpportunities/WorkingMap';
import { ac_fetchWorkingMapSuccess } from '../../../actions/public/CareerOpportunities/WorkingMap';
import { fetchWorkingMapRequest
 }  from '../../../apis/public/CareerOpportunities/WorkingMap';
import { ac_fetchSlideSuccess } from '../../../actions/public/Home/Header';
function* fetchWorkingMapSaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    try {
        const res = yield call(fetchWorkingMapRequest,`?SlungMenu=${pathname}`);
        const { datas } = res.data;
        const {DataSlide} = datas;
        yield put(ac_fetchWorkingMapSuccess(datas));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}


export function* WorkingMapSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_WORKING_MAP,fetchWorkingMapSaga)
    ]);
}