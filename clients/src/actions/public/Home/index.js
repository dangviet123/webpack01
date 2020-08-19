import * as Types from '../../../constants/public/Home';

export const ac_fetchHome = () => ({
    type: Types.FETCH_HOME
});

export const ac_fetchHomeSuccess = datas => ({
    type: Types.FETCH_HOME_SUCCESS,
    payload: {
        datas
    }
})