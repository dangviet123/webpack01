import { takeLatest,all, call, put } from 'redux-saga/effects';
import * as Types from '../../../constants/public/Home';
import { ac_fetchHomeSuccess } from '../../../actions/public/Home';
import { fetchHomeRequest }  from '../../../apis/public/Home';
import { ac_fetchSlideSuccess } from '../../../actions/public/Home/Header';

function* fetchHomeSaga() {
    try {
        const res = yield call(fetchHomeRequest);
        const { datas } = res.data;
        const {DataSlide} = datas;
        yield put(ac_fetchHomeSuccess(datas));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}

export function* HomeSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_HOME,fetchHomeSaga)
    ]);
}