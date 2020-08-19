import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/BigEvent/TrainingDevelopment';
import { ac_fetchTrainingDevelopmentSuccess, 
    ac_fetchTrainingDevelopmentDetailSuccess } from '../../../actions/public/BigEvent/TrainingDevelopment';
import { fetchTrainingDevelopmentRequest,
    fetchTrainingDevelopmentDetailRequest
 }  from '../../../apis/public/BigEvent/TrainingDevelopment';
import { ac_fetchSlideSuccess, 
    ac_fetchSlidePostsSuccess } from '../../../actions/public/Home/Header';
import {push} from 'connected-react-router';
function* fetchTrainingDevelopmentSaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    try {
        const res = yield call(fetchTrainingDevelopmentRequest,`?SlungMenu=${pathname}`);
        const { datas } = res.data;
        const {DataSlide} = datas;
        yield put(ac_fetchTrainingDevelopmentSuccess(datas));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}

function *fetchTrainingDevelopmentDetailSaga({payload}) {
    const {Slug} = payload;
    try {
        const res = yield call(fetchTrainingDevelopmentDetailRequest,`?Slug=${Slug}`);
        const {DataSlide,Detail,DataImageSlide,Status} = res.data;
        if (Status === true) {
            yield put(ac_fetchTrainingDevelopmentDetailSuccess(Detail));
            yield put(ac_fetchSlideSuccess(DataSlide));
            yield put(ac_fetchSlidePostsSuccess(DataImageSlide));
        }else if (Status === false) {
            yield put(push('/big-event/training-development'));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* TrainingDevelopmentSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_TRAINING_DEVELOPMENT,fetchTrainingDevelopmentSaga),
        takeLatest(Types.FETCH_TRAINING_DEVELOPMENT_DETAIL,fetchTrainingDevelopmentDetailSaga)
    ]);
}