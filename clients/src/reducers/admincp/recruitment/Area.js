import * as Types from '../../../constants/admincp/recruitment/Area';
const initialState = {
    datas: [],
    current_page: 1,
    total: 0,
    last_page: 1 // trang cuối
}
const Area = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_AREA:{
            return {...state};
        }
            
        case Types.FETCH_AREA_SUCCESS: {
            const { datas,current_page,last_page,total } = action.payload;
            return {...state,datas: datas,current_page: current_page,last_page: last_page,total: total};
        }
            
        case Types.FETCH_AREA_CHECKED_ONE:{
            const {index} = action.payload;
            state.datas[index].checked= !state.datas[index].checked;
            return {...state};
        }
            
        case Types.FETCH_AREA_CHECKED_ALL:{
            const {checkAll} = action.payload;
            state.datas.forEach((el,index) => {state.datas[index].checked = checkAll;});
            return {...state};
        }
            
        case Types.FETCH_AREA_ACTIVE_ONE:{
            const {idArea,active} = action.payload;
            state.datas.forEach((el,index) => {
                if (state.datas[index].idArea === idArea)   
                    state.datas[index].Active = active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        }
            
        case Types.FETCH_AREA_ACTIVE_ALL_SUCCESS: {
            const { list_id } = action.payload;
            state.datas.forEach((el,index) => {
                if ( list_id.includes(state.datas[index].idArea))
                    state.datas[index].Active = action.payload.active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        }
            
        default:
            return {...state};
    }
}

export default Area;