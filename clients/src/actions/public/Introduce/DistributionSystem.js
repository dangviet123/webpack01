import * as Types from '../../../constants/public/Introduce/DistributionSystem';

export const ac_fetchDistributionSystem= () => ({
    type: Types.FETCH_DISTRIBUTION_SYSTEM
});

export const ac_fetchDistributionSystemSuccess = datas => ({
    type: Types.FETCH_DISTRIBUTION_SYSTEM_SUCCESS,
    payload: {
        datas
    }
});