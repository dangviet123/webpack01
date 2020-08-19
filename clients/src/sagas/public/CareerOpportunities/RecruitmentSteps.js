import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/CareerOpportunities/RecruitmentSteps';
import { ac_fetchRecruitmentStepsSuccess } from '../../../actions/public/CareerOpportunities/RecruitmentSteps';
import { fetchRecruitmentStepsRequest
 }  from '../../../apis/public/CareerOpportunities/RecruitmentSteps';
import { ac_fetchSlideSuccess } from '../../../actions/public/Home/Header';
function* fetchRecruitmentStepsSaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    try {
        const res = yield call(fetchRecruitmentStepsRequest,`?SlungMenu=${pathname}`);
        const { datas } = res.data;
        const {DataSlide} = datas;
        yield put(ac_fetchRecruitmentStepsSuccess(datas));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}


export function* RecruitmentStepsSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_RECRUITMENT_STEPS,fetchRecruitmentStepsSaga)
    ]);
}