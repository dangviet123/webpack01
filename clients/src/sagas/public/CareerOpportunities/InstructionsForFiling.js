import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/CareerOpportunities/InstructionsForFiling';
import { ac_fetchInstructionsForFilingSuccess } from '../../../actions/public/CareerOpportunities/InstructionsForFiling';
import { fetchInstructionsForFilingRequest
 }  from '../../../apis/public/CareerOpportunities/InstructionsForFiling';
import { ac_fetchSlideSuccess } from '../../../actions/public/Home/Header';
function* fetchInstructionsForFilingSaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    try {
        const res = yield call(fetchInstructionsForFilingRequest,`?SlungMenu=${pathname}`);
        const { datas } = res.data;
        const {DataSlide} = datas;
        yield put(ac_fetchInstructionsForFilingSuccess(datas));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}


export function* InstructionsForFilingSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_INSTRUCTION_FOR_FILING,fetchInstructionsForFilingSaga)
    ]);
}