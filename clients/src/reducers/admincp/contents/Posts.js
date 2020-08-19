import * as Types from '../../../constants/admincp/contents/Posts';
const initialState = {
    datas: [],
    current_page: 1,
    total: 0,
    last_page: 1, // trang cuối
    ListGroupTitle: [],
    edit: {},
    ImageSlide: [],
    listCategory: [],
    Status: false
}
const Posts = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_POSTS:{
            return {...state};
        }
            
        case Types.FETCH_POSTS_SUCCESS:{
            const { datas,current_page,last_page,total,listCategory } = action.payload;
            return {...state,datas,current_page,last_page,total,listCategory};
        }
            
        case Types.FETCH_POSTS_CHECKED_ONE:{
            const {index} = action.payload;
            state.datas[index].checked= !state.datas[index].checked;
            return {...state};
        }
            
        case Types.FETCH_POSTS_CHECKED_ALL:{
            const {checkAll} = action.payload;
            state.datas.forEach((el,index) => {state.datas[index].checked = checkAll;});
            return {...state};
        }
            
        case Types.FETCH_POSTS_ACTIVE_ONE:{
            const {idPosts,active} = action.payload;
            state.datas.forEach((el,index) => {
                if (state.datas[index].idPosts === idPosts)   
                    state.datas[index].Active = active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        }

        case Types.FETCH_GET_POSTS_UPDATE_SUCCESS: {
            const {edit} = action.payload;
            return {...state,edit: edit.data,ImageSlide: edit.ImageSlide,Status: false};
        }
            
        case Types.FETCH_POSTS_ACTIVE_ALL_SUCCESS:{
            const { list_id } = action.payload;
            state.datas.forEach((el,index) => {
                if ( list_id.includes(state.datas[index].idPosts))
                    state.datas[index].Active = action.payload.active ? 1: 0;
                    state.datas[index].checked = false;
            });
            return {...state};
        }

        case Types.GET_LIST_TITLE_GROUP_SUCCESS:{
            const {ListGroupTitle} = action.payload;
            return {...state,ListGroupTitle};
        }
        
        case Types.DELETE_IMAGE_SLIDE: { // xóa ảnh slide
            return {...state,Status: false};
        }

        case Types.DELETE_IMAGE_SLIDE_SUCCESS: { // xóa ảnh slide
            const {status} = action.payload;
            return {...state,Status: status};
        }
            
        default:
            return {...state};
    }
}

export default Posts;