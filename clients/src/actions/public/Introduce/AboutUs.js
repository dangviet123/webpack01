import * as Types from '../../../constants/public/Introduce/AboutUs';

export const ac_fetchAboutUs = () => ({
    type: Types.FETCH_ABOUTUS
});

export const ac_fetchAboutUsSuccess = datas => ({
    type: Types.FETCH_ABOUTUS_SUCCESS,
    payload: {
        datas
    }
});