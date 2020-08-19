import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/BigEvent/CulturalActivities';
import { ac_fetchCulturalActivitiesSuccess, 
    ac_fetchCulturalActivitiesDetailSuccess } from '../../../actions/public/BigEvent/CulturalActivities';
import { fetchCulturalActivitiesRequest,
    fetchCulturalActivitiesDetailRequest
 }  from '../../../apis/public/BigEvent/CulturalActivities';
import { ac_fetchSlideSuccess, 
    ac_fetchSlidePostsSuccess } from '../../../actions/public/Home/Header';
import {push} from 'connected-react-router';
function* fetchCulturalActivitiesSaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    try {
        const res = yield call(fetchCulturalActivitiesRequest,`?SlungMenu=${pathname}`);
        const { datas } = res.data;
        const {DataSlide} = datas;
        yield put(ac_fetchCulturalActivitiesSuccess(datas));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}

function *fetchCulturalActivitiesDetailSaga({payload}) {
    const {Slug} = payload;
    try {
        const res = yield call(fetchCulturalActivitiesDetailRequest,`?Slug=${Slug}`);
        const {DataSlide,Detail,DataImageSlide,Status} = res.data;
        if (Status === true) {
            yield put(ac_fetchCulturalActivitiesDetailSuccess(Detail));
            yield put(ac_fetchSlideSuccess(DataSlide));
            yield put(ac_fetchSlidePostsSuccess(DataImageSlide));
        }else if (Status === false) {
            yield put(push('/big-event/cultural-activities'));
        }
        
    } catch (error) {
        console.log(error);
    }
}

export function* CulturalActivitiesSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_ALTURAL_ACTIVITIES,fetchCulturalActivitiesSaga),
        takeLatest(Types.FETCH_ALTURAL_ACTIVITIES_DETAIL,fetchCulturalActivitiesDetailSaga)
    ]);
}