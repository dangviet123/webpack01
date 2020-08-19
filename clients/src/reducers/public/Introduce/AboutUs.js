import * as Types from '../../../constants/public/Introduce/AboutUs';
const initialState = {
    ListPosts: []
}
const  AboutUs = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ABOUTUS: {
            return {...state};
        }
            
        case Types.FETCH_ABOUTUS_SUCCESS:{
            const { datas} = action.payload;
            const {ListPosts} = datas;
            return {...state,ListPosts};
        }

        default:
            return {...state};
    }
}

export default AboutUs;