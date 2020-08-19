import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/ContactSupport/OfficePhannam';
import { ac_fetchOfficePhannamSuccess } from '../../../actions/public/ContactSupport/OfficePhannam';
import { fetchOfficePhannamRequest
 }  from '../../../apis/public/ContactSupport/OfficePhannam';
import { ac_fetchSlideSuccess } from '../../../actions/public/Home/Header';
function* fetchOfficePhannamSaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    try {
        const res = yield call(fetchOfficePhannamRequest,`?SlungMenu=${pathname}`);
        const { datas } = res.data;
        const {DataSlide} = datas;
        yield put(ac_fetchOfficePhannamSuccess(datas));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}


export function* OfficePhannamSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_OFFICE_PHANAM,fetchOfficePhannamSaga)
    ]);
}