import * as Types from '../../../constants/public/CareerOpportunities/InstructionsForFiling';
const initialState = {
    Post: {}
}
const InstructionsForFiling = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_INSTRUCTION_FOR_FILING: {
            return {...state};
        }
            
        case Types.FETCH_INSTRUCTION_FOR_FILING_SUCCESS:{
            const { datas} = action.payload;
            const {Post} = datas;
            return {...state,Post};
        }


        default:
            return {...state};
    }
}

export default InstructionsForFiling;