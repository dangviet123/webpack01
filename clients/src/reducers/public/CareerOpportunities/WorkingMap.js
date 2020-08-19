import * as Types from '../../../constants/public/CareerOpportunities/WorkingMap';
const initialState = {
    ListWorking: []
}
const WorkingMap = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_WORKING_MAP: {
            return {...state};
        }
            
        case Types.FETCH_WORKING_MAP_SUCCESS:{
            const { datas} = action.payload;
            const {ListWorking} = datas;
            return {...state,ListWorking};
        }


        default:
            return {...state};
    }
}

export default WorkingMap;