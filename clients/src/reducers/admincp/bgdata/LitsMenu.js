import * as Types from '../../../constants/admincp/bgdata/MenuType';
const initialState = {
    datas: {
        data: []
    },
    checkSlug: true,
    ListCategory: [],
    Listpermision: []
}

const ListMenu = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_MENU: {
            return {...state,checkSlug: true,ListCategory: [],Listpermision: []};
        }
        case Types.GET_MENU_SUCCESS:{
            const { datas } = action.payload;
            return {...state,datas};
        }
        case Types.CHECK_SLUG_SUCCESS: {
            const {Status} = action.payload;
            return {...state,checkSlug: Status};
        }
        case Types.GET_LIST_CATEGORY_SUCCESS: {
            const { ListCategory } = action.payload;
            return {...state,ListCategory};
        }

        case Types.CHANGE_MENU: {
            const {listmenu} = action.payload;

            state.datas.data = listmenu;
            return {...state};
        }
        case Types.LOAD_PERMISION: {
            return {...state};
        }
        case Types.LOAD_PERMISION_SUCCESS: {
            const {Listpermision} = action.payload;
            return {...state,Listpermision};
        }

        case Types.CHECK_ONE_PERMISSION: {
            const {index} = action.payload;
            state.Listpermision[index].checked = (state.Listpermision[index].checked === 1) ? 0 : 1;
            return {...state};
        }

        case Types.CHECK_ALL_PERMISSION: {
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
export default ListMenu;

