import * as Types from '../../../constants/public/CareerOpportunities/RecruitmentSteps';

export const ac_fetchRecruitmentSteps = () => ({
    type: Types.FETCH_RECRUITMENT_STEPS
});

export const ac_fetchRecruitmentStepsSuccess = datas => ({
    type: Types.FETCH_RECRUITMENT_STEPS_SUCCESS,
    payload: {
        datas
    }
});