import * as Types from '../../../constants/public/BigEvent/CommunityResponsibility';

export const ac_fetchCommunityResponsibility= () => ({
    type: Types.FETCH_COMMUNITY_RESPONSIBILITY
});

export const ac_fetchCommunityResponsibilitySuccess = datas => ({
    type: Types.FETCH_COMMUNITY_RESPONSIBILITY_SUCCESS,
    payload: {
        datas
    }
});

export const ac_fetchCommunityResponsibilityDetail = (Slug) => ({
    type: Types.FETCH_COMMUNITY_RESPONSIBILITY_DETAIL,
    payload: {
        Slug
    }
});

export const ac_fetchCommunityResponsibilityDetailSuccess = Detail => ({
    type: Types.FETCH_COMMUNITY_RESPONSIBILITY_DETAIL_SUCCESS,
    payload: {
        Detail
    }
});