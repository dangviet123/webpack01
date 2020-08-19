import * as Types from '../../../constants/admincp/bgdata/Steps';
const initialState = {
    datas: [],
    current_page: 1,
    total: 0,
    last_page: 1, // trang cuối
    edit: {}
}
const Steps = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_STEPS:
            return {...state};
        case Types.FETCH_STEPS_SUCCESS:{
            const { datas,current_page,last_page,total } = action.payload;
            return {...state,datas: datas,current_page: current_page,last_page: last_page,total: total};
        }
            
        case Types.FETCH_STEPS_CHECKED_ONE:{
            const {index} = action.payload;
            state.datas[index].checked= !state.datas[index].checked;
            return {...state};
        }
            
        case Types.FETCH_GET_STEPS_UPDATE_SUCCESS: {
            const {edit} = action.payload;
            return {...state,edit}
        }
        case Types.FETCH_STEPS_CHECKED_ALL:{
            const {checkAll} = action.payload;
            state.datas.forEach((el,index) => {state.datas[index].checked = checkAll;});
            return {...state};
        }
            
        case Types.FETCH_STEPS_ACTIVE_ONE:{
            const {idSteps,active} = action.payload;
            state.datas.forEach((el,index) => {
                if (state.datas[index].idSteps === idSteps)   
                    state.datas[index].Active = active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        }
            
        case Types.FETCH_STEPS_ACTIVE_ALL_SUCCESS:{
            const { list_id } = action.payload;
            state.datas.forEach((el,index) => {
                if ( list_id.includes(state.datas[index].idSteps))
                    state.datas[index].Active = action.payload.active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        }
            
        default:
            return {...state};
    }
}

export default Steps;