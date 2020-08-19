import * as Types from '../../../constants/public/BigEvent/TrainingDevelopment';

export const ac_fetchTrainingDevelopment = () => ({
    type: Types.FETCH_TRAINING_DEVELOPMENT
});

export const ac_fetchTrainingDevelopmentSuccess = datas => ({
    type: Types.FETCH_TRAINING_DEVELOPMENT_SUCCESS,
    payload: {
        datas
    }
});

export const ac_fetchTrainingDevelopmentDetail = (Slug) => ({
    type: Types.FETCH_TRAINING_DEVELOPMENT_DETAIL,
    payload: {
        Slug
    }
});

export const ac_fetchTrainingDevelopmentDetailSuccess = Detail => ({
    type: Types.FETCH_TRAINING_DEVELOPMENT_DETAIL_SUCCESS,
    payload: {
        Detail
    }
});