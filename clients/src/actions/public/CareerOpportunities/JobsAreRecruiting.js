import * as Types from '../../../constants/public/CareerOpportunities/JobsAreRecruiting';

export const ac_fetchJobsAreRecruiting = () => ({
    type: Types.FETCH_JOBS_AREA_RECRUITING
});

export const ac_fetchJobsAreRecruitingSuccess = datas => ({
    type: Types.FETCH_JOBS_AREA_RECRUITING_SUCCESS,
    payload: {
        datas
    }
});

export const ac_fetchJobsAreRecruitingDetail = (Slug) => ({
    type: Types.FETCH_JOBS_AREA_RECRUITING_DETAIL,
    payload: {
        Slug
    }
});

export const ac_fetchJobsAreRecruitingDetailSuccess = datas => ({
    type: Types.FETCH_JOBS_AREA_RECRUITING_DETAIL_SUCCESS,
    payload: {
        datas
    }
});

export const ac_addProfileSubmit = datas => ({
    type: Types.ADD_PROFILE_SUBMIT,
    payload: {
        datas
    }
});