import * as Types from '../../../constants/public/BigEvent/CulturalActivities';

export const ac_fetchCulturalActivities = () => ({
    type: Types.FETCH_ALTURAL_ACTIVITIES
});

export const ac_fetchCulturalActivitiesSuccess = datas => ({
    type: Types.FETCH_ALTURAL_ACTIVITIES_SUCCESS,
    payload: {
        datas
    }
});

export const ac_fetchCulturalActivitiesDetail = (Slug) => ({
    type: Types.FETCH_ALTURAL_ACTIVITIES_DETAIL,
    payload: {
        Slug
    }
});

export const ac_fetchCulturalActivitiesDetailSuccess = Detail => ({
    type: Types.FETCH_ALTURAL_ACTIVITIES_DETAIL_SUCCESS,
    payload: {
        Detail
    }
});