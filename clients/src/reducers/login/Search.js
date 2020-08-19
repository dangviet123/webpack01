import * as Types from '../../constants/login/login';
const initialState = {
    isSearch: false
}
const showSearch = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_SEARCH:
            const { isSearch } = action.payload;
            return {...state,isSearch: isSearch};
        default:
            return {...state};
    }
}

export default showSearch;