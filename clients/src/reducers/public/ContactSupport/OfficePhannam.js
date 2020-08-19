import * as Types from '../../../constants/public/ContactSupport/OfficePhannam';
const initialState = {
    ListOffice: []
}
const OfficePhannam = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_OFFICE_PHANAM: {
            return {...state};
        }
            
        case Types.FETCH_OFFICE_PHANAM_SUCCESS:{
            const { datas} = action.payload;
            const {ListOffice} = datas;
            return {...state,ListOffice};
        }


        default:
            return {...state};
    }
}

export default OfficePhannam;