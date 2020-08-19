import * as Types from '../../../constants/public/Service';
const initialState = {
    ListPosts: [],
    SvTitle: '',
    Detail: {}
}
const Service = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SERVICE: {
            return {...state};
        }
            
        case Types.FETCH_SERVICE_SUCCESS:{
            const { datas} = action.payload;
            const {ListPosts,SvTitle} = datas;
            return {...state,ListPosts,SvTitle};
        }

        case Types.FETCH_SERVICE_DETAIL_SUCCESS:{
            const { Detail} = action.payload;
            return {...state,Detail};
        }

        default:
            return {...state};
    }
}

export default Service;