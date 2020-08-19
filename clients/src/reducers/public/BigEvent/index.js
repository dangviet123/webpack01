import * as Types from '../../../constants/public/BigEvent';
const initialState = {
    Post: {}
}
const  BigEvent = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_BIGEVENT: {
            return {...state};
        }

            
        case Types.FETCH_BIGEVENT_SUCCESS:{
            const { datas} = action.payload;
            const {Post} = datas;
            return {...state,Post};
        }

        default:
            return {...state};
    }
}

export default BigEvent;