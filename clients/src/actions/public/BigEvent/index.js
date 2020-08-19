import * as Types from '../../../constants/public/BigEvent';

export const ac_fetchBigEvent = () => ({
    type: Types.FETCH_BIGEVENT
});

export const ac_fetchBigEventSuccess = datas => ({
    type: Types.FETCH_BIGEVENT_SUCCESS,
    payload: {
        datas
    }
});