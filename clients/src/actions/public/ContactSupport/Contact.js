import * as Types from '../../../constants/public/ContactSupport/Contact';

export const ac_fetchContact = () => ({
    type: Types.FETCH_CONTACT
});
export const ac_fetchContactSuccess = datas => ({
    type: Types.FETCH_CONTACT_SUCCESS,
    payload: {
        datas
    }
});

export const ac_addContact = datas => ({
    type: Types.ADD_CONTACT,
    payload: {
        datas
    }
});