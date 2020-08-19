import * as Types from '../../../constants/admincp/contacts/Support';
const initialState = {
    datas: [],
    ListDetail: {},
    current_page: 1,
    total: 0,
    last_page: 1 // trang cuối
}
const Support = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SUPPORT:{
            return {...state};
        }
            
        case Types.FETCH_SUPPORT_SUCCESS:{
            const { datas,current_page,last_page,total } = action.payload;
            return {...state,datas: datas,current_page: current_page,last_page: last_page,total: total};
        }
            
        case Types.FETCH_SUPPORT_CHECKED_ONE:{
            const {index} = action.payload;
            state.datas[index].checked= !state.datas[index].checked;
            return {...state};
        }
            
        case Types.FETCH_SUPPORT_CHECKED_ALL:{
            const {checkAll} = action.payload;
            state.datas.forEach((el,index) => {state.datas[index].checked = checkAll;});
            return {...state};
        }

        case Types.SHOW_DETAIL_SUPPORT: {
            return {...state,ListDetail: {}};
        }

        case Types.SHOW_DETAIL_SUPPORT_SUCCESS: {
            const {ListDetail} = action.payload;
            return {...state,ListDetail: ListDetail};
        }
            
        
        default:
            return {...state};
    }
}

export default Support;