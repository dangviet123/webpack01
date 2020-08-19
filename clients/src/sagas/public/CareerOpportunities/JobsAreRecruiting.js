import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/public/CareerOpportunities/JobsAreRecruiting';
import { ac_fetchJobsAreRecruitingSuccess, 
    ac_fetchJobsAreRecruitingDetailSuccess } from '../../../actions/public/CareerOpportunities/JobsAreRecruiting';
import { fetchJobsAreRecruitingRequest,
    fetchJobsAreRecruitingDetailRequest,
    addProfileRequest
 }  from '../../../apis/public/CareerOpportunities/JobsAreRecruiting';
import { ac_fetchSlideSuccess } from '../../../actions/public/Home/Header';
import {push} from 'connected-react-router';
import { submitForm } from '../../../actions/login/login';
import { showModalDialogs } from '../../../actions/admincp/ModalDialogs';
import { toastSuccess } from '../../../helpers/toastHelper';
function* fetchJobsAreRecruitingSaga() {
    const state = yield select();
    const { pathname } = state.router.location;
    const params = state.router.location.search;
    const new_params = (params !== '') ? `${params}&SlungMenu=${pathname}` : `?SlungMenu=${pathname}`;
    try {
        const res = yield call(fetchJobsAreRecruitingRequest,new_params);
        const { datas } = res.data;
        const {DataSlide} = datas;
        yield put(ac_fetchJobsAreRecruitingSuccess(datas));
        yield put(ac_fetchSlideSuccess(DataSlide));
    } catch (error) {
        console.log(error);
    }
}

function *fetchJobsAreRecruitingDetailSaga({payload}) {
    const {Slug} = payload;
    try {
        const res = yield call(fetchJobsAreRecruitingDetailRequest,`?Slug=${Slug}`);
        const { datas,Status } = res.data;
        if (Status === true) {
            const {DataSlide} = datas;
            yield put(ac_fetchJobsAreRecruitingDetailSuccess(datas));
            yield put(ac_fetchSlideSuccess(DataSlide));
        }else if (Status === false) {
            yield put(push('/career-opportunities/jobs-are-recruiting'));
        }
        
    } catch (error) {
        console.log(error);
    }
}


function *addProfileSaga({payload}) {
    const {datas} = payload;
    yield put(submitForm(true));
    try {
        const res = yield call(addProfileRequest,datas);
        const { Status } = res.data;
        if (Status === true) {
            yield put(push(`/career-opportunities/jobs-are-recruiting`));
            toastSuccess(`Thông tin của bạn đã được gửi đi chúng tôi sẽ sớm liên hệ với bạn !`);
            yield put(showModalDialogs(false,"","",""));
        }
    } catch (error) {
        console.log(error);
    }
    yield put(submitForm(false));
}

export function* JobsAreRecruitingSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_JOBS_AREA_RECRUITING,fetchJobsAreRecruitingSaga),
        takeLatest(Types.FETCH_JOBS_AREA_RECRUITING_DETAIL,fetchJobsAreRecruitingDetailSaga),
        takeLatest(Types.ADD_PROFILE_SUBMIT,addProfileSaga)
    ]);
}