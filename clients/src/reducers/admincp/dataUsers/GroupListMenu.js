import * as Types from '../../../constants/admincp/dataUsers/Groups';
const initialState = {
    datas: [],
    Listpermision: []
}

const GroupListMenu = (state = initialState, action) => {
    switch (action.type) {
        case Types.GROUP_GET_MENU: {
            return {...state,Listpermision: []};
        }
        case Types.GROUP_GET_MENU_SUCCESS:{
            const { datas } = action.payload;
            return {...state,datas};
        }

        case Types.GROUP_LOAD_PERMISION: {
            return {...state};
        }
        case Types.GROUP_LOAD_PERMISION_SUCCESS: {
            const {Listpermision} = action.payload;
            return {...state,Listpermision};
        }

        case Types.GROUP_CHECK_ONE_PERMISSION: {
            const {index} = action.payload;
            state.Listpermision[index].checked = (state.Listpermision[index].checked === 1) ? 0 : 1;
            return {...state};
        }

        case Types.GROUP_CHECK_ALL_PERMISSION: {
            const {checked} = action.payload;
            const checkedNew = checked ? 1 : 0;
            state.Listpermision.forEach((el,index) => {state.Listpermision[index].checked = checkedNew;});
            return {...state};
        }
        default:{
            return {...state};
        }
            
    }
}
export default GroupListMenu;

