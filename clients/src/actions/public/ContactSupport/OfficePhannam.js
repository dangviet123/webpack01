import * as Types from '../../../constants/public/ContactSupport/OfficePhannam';

export const ac_fetchOfficePhannam = () => ({
    type: Types.FETCH_OFFICE_PHANAM
});

export const ac_fetchOfficePhannamSuccess = datas => ({
    type: Types.FETCH_OFFICE_PHANAM_SUCCESS,
    payload: {
        datas
    }
});