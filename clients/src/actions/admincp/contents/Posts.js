import * as Types from '../../../constants/admincp/contents/Posts';

export const ac_fetchPosts = () => ({
    type: Types.FETCH_POSTS
});


export const ac_fetchPostsSuccess = (datas,current_page,last_page,total,listCategory) => ({
    type: Types.FETCH_POSTS_SUCCESS,
    payload:{
        datas,
        current_page,
        last_page,
        total,
        listCategory
    }
});

export const ac_addPosts = data_add => ({
    type: Types.FETCH_POSTS_CREATE,
    payload: {
        data_add
    }
});


export const ac_getEditPosts = idPosts => ({
    type: Types.FETCH_GET_POSTS_UPDATE,
    payload: {
        idPosts
    }
});
export const ac_getEditPostsSuccess = edit => ({
    type: Types.FETCH_GET_POSTS_UPDATE_SUCCESS,
    payload: {
        edit
    }
})

export const ac_editPosts = (idPosts,value) => ({
    type: Types.FETCH_POSTS_UPDATE,
    payload: {
        idPosts,
        value
    }
});

export const ac_checkedOne = index => ({
    type: Types.FETCH_POSTS_CHECKED_ONE,
    payload: {
        index
    }
});

export const ac_checkedAll = checkAll => ({
    type: Types.FETCH_POSTS_CHECKED_ALL,
    payload: {
        checkAll
    }
});

export const ac_activeOnePosts = (idPosts,active) => ({
    type: Types.FETCH_POSTS_ACTIVE_ONE,
    payload: {
        idPosts,
        active
    }
});

export const ac_activeOnePostsSuccess = (idPosts,active) => ({
    type: Types.FETCH_POSTS_ACTIVE_ONE_SUCCESS,
    payload: {
        idPosts,
        active
    }
});


export const ac_activeAllPosts = (listcheck,active) => ({
    type: Types.FETCH_POSTS_ACTIVE_ALL,
    payload: {
        listcheck,
        active
    }
});

export const ac_deleteAllPosts = (listcheck) => ({
    type: Types.FETCH_POSTS_DELETE_ALL,
    payload: {
        listcheck
    }
});


export const ac_activeAllPostsSuccess = (list_id,active) => ({
    type: Types.FETCH_POSTS_ACTIVE_ALL_SUCCESS,
    payload: {
        list_id,
        active
    }
});


export const ac_getListTitleGroup = () => ({
    type: Types.GET_LIST_TITLE_GROUP
});

export const ac_getListTitleGroupSuccess = (ListGroupTitle) => ({
    type: Types.GET_LIST_TITLE_GROUP_SUCCESS,
    payload: {
        ListGroupTitle
    }
});

export const ac_deleteImageSlide = data => ({
    type: Types.DELETE_IMAGE_SLIDE,
    payload: {
        data
    }
});

export const ac_deleteImageSlideSuccess = status => ({
    type: Types.DELETE_IMAGE_SLIDE_SUCCESS,
    payload: {
        status
    }
});

