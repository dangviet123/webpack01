import * as Types from '../../../constants/public/Home/Header';
const initialState = {
    datas: [],
    DataSlide: [],
    DataImageSlide: []
}
const Header = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_MENU: {
            return {...state};
        }
            
        case Types.FETCH_MENU_SUCCESS:{
            const { datas} = action.payload;
            return {...state,datas: datas};
        }

        case Types.FETCH_SILDE_SUCCESS:{
            const { DataSlide} = action.payload;
            return {...state,DataSlide};
        }

        case Types.FETCH_IMAGE_SILDE_SUCCESS:{
            const { DataImageSlide} = action.payload;
            return {...state,DataImageSlide};
        }

        default:
            return {...state};
    }
}

export default Header;