import * as Types from '../../../constants/public/BigEvent/CulturalActivities';
const initialState = {
    ListPosts: [],
    Detail: {}
}
const CulturalActivities = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ALTURAL_ACTIVITIES: {
            return {...state};
        }

        case Types.FETCH_ALTURAL_ACTIVITIES_DETAIL: {
            return {...state};
        }
            
        case Types.FETCH_ALTURAL_ACTIVITIES_SUCCESS:{
            const { datas} = action.payload;
            const {ListPosts} = datas;
            return {...state,ListPosts};
        }

        case Types.FETCH_ALTURAL_ACTIVITIES_DETAIL_SUCCESS:{
            const { Detail} = action.payload;
            return {...state,Detail};
        }

        default:
            return {...state};
    }
}

export default CulturalActivities;