import * as Types from '../../../constants/public/Service';

export const ac_fetchService = () => ({
    type: Types.FETCH_SERVICE
});

export const ac_fetchServiceSuccess = datas => ({
    type: Types.FETCH_SERVICE_SUCCESS,
    payload: {
        datas
    }
});


export const ac_fetchServiceDetail = (Slug) => ({
    type: Types.FETCH_SERVICE_DETAIL,
    payload: {
        Slug
    }
});

export const ac_fetchServiceDetailSuccess = Detail => ({
    type: Types.FETCH_SERVICE_DETAIL_SUCCESS,
    payload: {
        Detail
    }
});