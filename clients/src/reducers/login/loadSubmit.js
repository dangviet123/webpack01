import * as Types from '../../constants/login/login';
const initialState = {
    isSubmit: false
}
const showSubmit = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_SUBMIT:
            const { isSubmit } = action.payload;
            return {...state,isSubmit: isSubmit};
        default:
            return {...state};
    }
}

export default showSubmit;