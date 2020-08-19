import * as Types from '../../../constants/admincp/dataUsers/ListPermission';
const initialState = {
    datas: [],
    current_page: 1,
    total: 0,
    last_page: 1 // trang cuối
}
const ListPermission = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_LISTPERMISSION:
            return {...state};
        case Types.FETCH_LISTPERMISSION_SUCCESS:
            const { datas,current_page,last_page,total } = action.payload;
            return {...state,datas: datas,current_page: current_page,last_page: last_page,total: total};
        case Types.FETCH_LISTPERMISSION_CHECKED_ONE:
            const {index} = action.payload;
            state.datas[index].checked= !state.datas[index].checked;
            return {...state};
        case Types.FETCH_LISTPERMISSION_CHECKED_ALL:
            const {checkAll} = action.payload;
            state.datas.forEach((el,index) => {state.datas[index].checked = checkAll;});
            return {...state};
        case Types.FETCH_LISTPERMISSION_ACTIVE_ONE: // active one
            const {idListPermission,active} = action.payload;
            state.datas.forEach((el,index) => {
                if (state.datas[index].idListPermission === idListPermission)   
                    state.datas[index].Active = active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        case Types.FETCH_LISTPERMISSION_ACTIVE_ALL_SUCCESS: // active all
            const { list_id } = action.payload;
            state.datas.forEach((el,index) => {
                if ( list_id.includes(state.datas[index].idListPermission))
                    state.datas[index].Active = action.payload.active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        default:
            return {...state};
    }
}

export default ListPermission;