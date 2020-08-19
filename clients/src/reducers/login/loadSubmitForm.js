import * as Types from '../../constants/login/login';
const initialState = {
    isSubmitForm: false
}
const showSubmitForm = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_SUBMITFORM:
            const { isSubmitForm } = action.payload;
            return {...state,isSubmitForm: isSubmitForm};
        default:
            return {...state};
    }
}

export default showSubmitForm;