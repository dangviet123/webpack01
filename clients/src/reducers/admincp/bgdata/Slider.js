import * as Types from '../../../constants/admincp/bgdata/Slider';
const initialState = {
    datas: [],
    current_page: 1,
    total: 0,
    last_page: 1, // trang cuối,
    edit: {}
}
const Slider = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SLIDER:{
            return {...state,edit: {}};
        }
            
        case Types.FETCH_SLIDER_SUCCESS:{
            const { datas,current_page,last_page,total } = action.payload;
            return {...state,datas: datas,current_page: current_page,last_page: last_page,total: total};
        }
            
        case Types.FETCH_GET_SLIDER_UPDATE_SUCCESS: {
            const {edit} = action.payload;
            return {...state,edit}
        }
        case Types.FETCH_SLIDER_CHECKED_ONE:{
            const {index} = action.payload;
            state.datas[index].checked= !state.datas[index].checked;
            return {...state};
        }
            
        case Types.FETCH_SLIDER_CHECKED_ALL:{
            const {checkAll} = action.payload;
            state.datas.forEach((el,index) => {state.datas[index].checked = checkAll;});
            return {...state};
        }
            
        case Types.FETCH_SLIDER_ACTIVE_ONE:{
            const {idSlider,active} = action.payload;
            state.datas.forEach((el,index) => {
                if (state.datas[index].idSlider === idSlider)   
                    state.datas[index].Active = active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        }
            
        case Types.FETCH_SLIDER_ACTIVE_ALL_SUCCESS:{
            const { list_id } = action.payload;
            state.datas.forEach((el,index) => {
                if ( list_id.includes(state.datas[index].idSlider))
                    state.datas[index].Active = action.payload.active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        }
            
        default:
            return {...state};
    }
}

export default Slider;