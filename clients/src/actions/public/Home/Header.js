import * as Types from '../../../constants/public/Home/Header';

export const ac_fetchMenu = () => ({
    type: Types.FETCH_MENU
});

export const ac_fetchMenuSuccess = datas => ({
    type: Types.FETCH_MENU_SUCCESS,
    payload: {
        datas
    }
});

export const ac_fetchSlideSuccess = DataSlide => ({
    type: Types.FETCH_SILDE_SUCCESS,
    payload: {
        DataSlide
    }
});

export const ac_fetchSlidePostsSuccess = DataImageSlide => ({
    type: Types.FETCH_IMAGE_SILDE_SUCCESS,
    payload: {
        DataImageSlide
    }
});