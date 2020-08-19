import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/BigEvent/CommunityResponsibility';
import { ac_fetchCommunityResponsibilitySuccess, 
    ac_fetchCommunityResponsibilityDetailSuccess } from '../../../actions/public/BigEvent/CommunityResponsibility';
import { fetchCommunityResponsibilityRequest,
    fetchCommunityResponsibilityDetailRequest
 }  from '../../../apis/public/BigEvent/CommunityResponsibility';
import { ac_fetchSlideSuccess, 
    ac_fetchSlidePostsSuccess } from '../../../actions/public/Home/Header';
import {push} from 'connected-react-router';
function* fetchCommunityResponsibilitySaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    try {
        const res = yield call(fetchCommunityResponsibilityRequest,`?SlungMenu=${pathname}`);
        const { datas } = res.data;
        const {DataSlide} = datas;
        yield put(ac_fetchCommunityResponsibilitySuccess(datas));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}

function *fetchCommunityResponsibilityDetailSaga({payload}) {
    const {Slug} = payload;
    try {
        const res = yield call(fetchCommunityResponsibilityDetailRequest,`?Slug=${Slug}`);
        const {DataSlide,Detail,DataImageSlide,Status} = res.data;
        if (Status === true) {
            yield put(ac_fetchCommunityResponsibilityDetailSuccess(Detail));
            yield put(ac_fetchSlideSuccess(DataSlide));
            yield put(ac_fetchSlidePostsSuccess(DataImageSlide));
        }else if (Status === false) {
            yield put(push('/big-event/community-responsibility'));
        }
        
    } catch (error) {
        console.log(error);
    }
}

export function* CommunityResponsibilitySagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_COMMUNITY_RESPONSIBILITY,fetchCommunityResponsibilitySaga),
        takeLatest(Types.FETCH_COMMUNITY_RESPONSIBILITY_DETAIL,fetchCommunityResponsibilityDetailSaga)
    ]);
}