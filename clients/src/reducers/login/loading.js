import * as Types from '../../constants/login/login';
const initialState = {
    isLoading: false
}
const showLoading = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_LOADING:
            const { isLoading } = action.payload;
            return {...state,isLoading: isLoading};
        default:
            return {...state};
    }
}

export default showLoading;