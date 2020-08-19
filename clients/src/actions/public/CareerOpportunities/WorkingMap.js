import * as Types from '../../../constants/public/CareerOpportunities/WorkingMap';

export const ac_fetchWorkingMap = () => ({
    type: Types.FETCH_WORKING_MAP
});

export const ac_fetchWorkingMapSuccess = datas => ({
    type: Types.FETCH_WORKING_MAP_SUCCESS,
    payload: {
        datas
    }
});