import * as Types from '../../../constants/public/BigEvent/TrainingDevelopment';
const initialState = {
    ListPosts: [],
    Detail: {}
}
const TrainingDevelopment = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_TRAINING_DEVELOPMENT: {
            return {...state};
        }

        case Types.FETCH_TRAINING_DEVELOPMENT_DETAIL: {
            return {...state};
        }
            
        case Types.FETCH_TRAINING_DEVELOPMENT_SUCCESS:{
            const { datas} = action.payload;
            const {ListPosts} = datas;
            return {...state,ListPosts};
        }

        case Types.FETCH_TRAINING_DEVELOPMENT_DETAIL_SUCCESS:{
            const { Detail} = action.payload;
            return {...state,Detail};
        }

        default:
            return {...state};
    }
}

export default TrainingDevelopment;