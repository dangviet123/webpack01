import * as Types from '../../../constants/public/CareerOpportunities/RecruitmentSteps';
const initialState = {
    ListSteps: []
}
const RecruitmentSteps = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_RECRUITMENT_STEPS: {
            return {...state};
        }
            
        case Types.FETCH_RECRUITMENT_STEPS_SUCCESS:{
            const { datas} = action.payload;
            const {ListSteps} = datas;
            return {...state,ListSteps};
        }


        default:
            return {...state};
    }
}

export default RecruitmentSteps;