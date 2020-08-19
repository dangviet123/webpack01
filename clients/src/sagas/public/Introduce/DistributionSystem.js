import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/Introduce/DistributionSystem';
import { ac_fetchDistributionSystemSuccess } from '../../../actions/public/Introduce/DistributionSystem';
import { fetchDistributionSystemRequest
 }  from '../../../apis/public/Introduce/DistributionSystem';
import { ac_fetchSlideSuccess, 
} from '../../../actions/public/Home/Header';
function* fetchDistributionSystemSaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    try {
        const res = yield call(fetchDistributionSystemRequest,`?SlungMenu=${pathname}`);
        const { datas } = res.data;
        const {DataSlide,...reData} = datas;
        yield put(ac_fetchDistributionSystemSuccess(reData));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}


export function* DistributionSystemSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_DISTRIBUTION_SYSTEM,fetchDistributionSystemSaga)
    ]);
}