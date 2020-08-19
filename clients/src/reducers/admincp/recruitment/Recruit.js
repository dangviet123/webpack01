import * as Types from '../../../constants/admincp/recruitment/Recruit';
const initialState = {
    datas: [],
    ListArea: [],
    ListVacancies: [],
    edit: {},
    ListDetail: {},
    current_page: 1,
    total: 0,
    last_page: 1 // trang cuối
}
const Recruit = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_RECRUIT:{
            return {...state};
        }
            
        case Types.FETCH_RECRUIT_SUCCESS:{
            const { datas,current_page,last_page,total,ListArea,ListVacancies } = action.payload;
            return {...state,datas: datas,current_page: current_page,last_page: last_page,total: total,ListArea: ListArea,ListVacancies: ListVacancies};
        }
           
        case Types.FETCH_RECRUIT_CHECKED_ONE:{
            const {index} = action.payload;
            state.datas[index].checked= !state.datas[index].checked;
            return {...state};
        }
            
        case Types.FETCH_RECRUIT_CHECKED_ALL:{
            const {checkAll} = action.payload;
            state.datas.forEach((el,index) => {state.datas[index].checked = checkAll;});
            return {...state};
        }
            
        case Types.FETCH_RECRUIT_ACTIVE_ONE:{
            const {idRecruit,active} = action.payload;
            state.datas.forEach((el,index) => {
                if (state.datas[index].idRecruit === idRecruit)   
                    state.datas[index].Active = active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        }
            
        case Types.FETCH_RECRUIT_ACTIVE_ALL_SUCCESS:{
            const { list_id } = action.payload;
            state.datas.forEach((el,index) => {
                if ( list_id.includes(state.datas[index].idRecruit))
                    state.datas[index].Active = action.payload.active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        }

        case Types.GET_ADD_RECRUIT_SUCCESS: {
            return {...state,ListArea: action.payload.ListArea,ListVacancies: action.payload.ListVacancies}
        }

        case Types.GET_EDIT_RECRUIT_SUCCESS: {
            return {...state,ListArea: action.payload.ListArea,ListVacancies: action.payload.ListVacancies,edit: action.payload.edit}
        }
        
        case Types.SHOW_DETAIL_RECRUIT: {
            return {...state,ListDetail: {}};
        }

        case Types.SHOW_DETAIL_RECRUIT_SUCCESS: {
            const {ListDetail} = action.payload;
            return {...state,ListDetail: ListDetail};
        }

        default:
            return {...state};
    }
}

export default Recruit;