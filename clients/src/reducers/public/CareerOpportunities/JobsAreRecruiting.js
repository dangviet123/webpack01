import * as Types from '../../../constants/public/CareerOpportunities/JobsAreRecruiting';
const initialState = {
    ListJobs: {
        data: [],
        current_page: 1,
        total: 0,
        last_page: 1 // trang cuối,
    },
    ListArea: [],
    ListVacancies: [],
    Detail: {},
    ListOrTher: []
}
const JobsAreRecruiting = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_JOBS_AREA_RECRUITING: {
            return {...state};
        }

        case Types.FETCH_JOBS_AREA_RECRUITING_DETAIL: {
            return {...state};
        }
            
        case Types.FETCH_JOBS_AREA_RECRUITING_SUCCESS:{
            const { datas} = action.payload;
            const {ListJobs,ListArea,ListVacancies} = datas;
            return {...state,ListJobs,ListArea,ListVacancies};
        }

        case Types.FETCH_JOBS_AREA_RECRUITING_DETAIL_SUCCESS:{
            const { Detail,ListOrTher} = action.payload.datas;
            return {...state,Detail,ListOrTher};
        }

        default:
            return {...state};
    }
}

export default JobsAreRecruiting;