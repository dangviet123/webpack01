import * as Types from '../../../constants/public/BigEvent/CommunityResponsibility';
const initialState = {
    ListPosts: [],
    Detail: {}
}
const CommunityResponsibility = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_COMMUNITY_RESPONSIBILITY: {
            return {...state};
        }

        case Types.FETCH_COMMUNITY_RESPONSIBILITY_DETAIL: {
            return {...state};
        }
            
        case Types.FETCH_COMMUNITY_RESPONSIBILITY_SUCCESS:{
            const { datas} = action.payload;
            const {ListPosts} = datas;
            return {...state,ListPosts};
        }

        case Types.FETCH_COMMUNITY_RESPONSIBILITY_DETAIL_SUCCESS:{
            const { Detail} = action.payload;
            return {...state,Detail};
        }

        default:
            return {...state};
    }
}

export default CommunityResponsibility;