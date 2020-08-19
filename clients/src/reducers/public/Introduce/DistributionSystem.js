import * as Types from '../../../constants/public/Introduce/DistributionSystem';
const initialState = {
    DataAddress: []
}
const  DistributionSystem = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_DISTRIBUTION_SYSTEM: {
            return {...state};
        }
            
        case Types.FETCH_DISTRIBUTION_SYSTEM_SUCCESS:{
            const { datas} = action.payload;
            const {DataAddress} = datas;
            return {...state,DataAddress};
        }

        default:
            return {...state};
    }
}

export default DistributionSystem;