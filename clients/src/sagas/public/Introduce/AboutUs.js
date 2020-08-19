import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/Introduce/AboutUs';
import { ac_fetchAboutUsSuccess } from '../../../actions/public/Introduce/AboutUs';
import { fetchAboutUsRequest
 }  from '../../../apis/public/Introduce/AboutUs';
import { ac_fetchSlideSuccess, 
} from '../../../actions/public/Home/Header';
function* fetchAboutUsSaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    try {
        const res = yield call(fetchAboutUsRequest,`?SlungMenu=${pathname}`);
        const { datas } = res.data;
        const {DataSlide,...reData} = datas;
        yield put(ac_fetchAboutUsSuccess(reData));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}


export function* AboutUsSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_ABOUTUS,fetchAboutUsSaga)
    ]);
}