import * as Types from '../../../constants/admincp/dataUsers/Users';
const initialState = {
    datas: [],
    current_page: 1,
    total: 0,
    last_page: 1, // trang cuối
    checkUserName: true,
    checkEmail: true,
    ListGroupPermission: []
}
const Users = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USERS:
            return {...state};
        case Types.FETCH_USERS_SUCCESS:
            const { datas,current_page,last_page,total } = action.payload;
            return {...state,datas: datas,current_page: current_page,last_page: last_page,total: total};
        case Types.FETCH_USERS_CHECKED_ONE:
            const {index} = action.payload;
            state.datas[index].checked= !state.datas[index].checked;
            return {...state};
        case Types.FETCH_USERS_CHECKED_ALL:
            const {checkAll} = action.payload;
            state.datas.forEach((el,index) => {
                if(state.datas[index].id !== 0)
                state.datas[index].checked = checkAll;
            });
            return {...state};
        case Types.FETCH_USERS_ACTIVE_ONE: // active one
            const {id,active} = action.payload;
            state.datas.forEach((el,index) => {
                if (state.datas[index].id === id)
                    state.datas[index].Active = active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        case Types.FETCH_USERS_ACTIVE_ALL_SUCCESS: // active all
            const { list_id } = action.payload;
            state.datas.forEach((el,index) => {
                if ( list_id.includes(state.datas[index].id))
                    state.datas[index].Active = action.payload.active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        case Types.FETCH_USERNAME_CHECK_UNIQUE_SUCCESS:
            return {...state,checkUserName: action.payload.Status};

        case Types.FETCH_EMAIL_CHECK_UNIQUE_SUCCESS:
            return {...state,checkEmail: action.payload.Status};
        case Types.FETCH_LIST_GROUP: {
            return {...state,ListGroupPermission: []}
        }
        case Types.FETCH_LIST_GROUP_SUCCESS: {
            const {ListGroupPermission} = action.payload;
            return {...state,ListGroupPermission};
        }
        default:
            return {...state};
    }
}

export default Users;