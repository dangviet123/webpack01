import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/contents/Posts';
import { ac_fetchPostsSuccess, 
    ac_fetchPosts,
    ac_activeOnePostsSuccess, 
    ac_activeAllPostsSuccess, 
    ac_getEditPostsSuccess,
    ac_getListTitleGroupSuccess,
    ac_deleteImageSlideSuccess
} from '../../../actions/admincp/contents/Posts';
import { 
    fetchPostsRequest,
    addPostsRequest,
    editPostsRequest,
    activeOnePostsRequest,
    activeAllPostsRequest, 
    deleteAllPostsRequest, 
    getEditPostsRequest,
    getListTitleGroupRequest,
    deleteImageSlideRequest
} from '../../../apis/admincp/contents/Posts';
import { submitForm,showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../../../helpers/toastHelper';
import {showModalDialogs, showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
import {go,push} from 'connected-react-router';
function* fetchPostsSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchPostsRequest,new_params);
        const { datas,listCategory } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchPostsSuccess(data,current_page,last_page,total,listCategory));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* addPostsSaga({payload}) { // thêm mới
    const { data_add } = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(addPostsRequest,data_add);
        const { Status } = res.data;
        if (Status === true) {
            yield put(go(-1));
            toastSuccess(langs.add_successfully);
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showModalDialogs(false,"","",""));
    yield put(submitForm(false));
}

function *getEditPostsSaga({payload}){ // lấy thông tin edit
    const {idPosts} = payload;
    yield put(showSubmit(true));
    try {
        const res = yield call(getEditPostsRequest,idPosts);
        const {Status,datas} = res.data;
        if (Status === true) {
            yield put(ac_getEditPostsSuccess(datas));
        }else if (Status === false) {
            yield put(push('/admincp'));
        }
    } catch (error) {
        console.log(error);
    }
    yield put(showSubmit(false));
}

function* editPostsSaga({payload}) { // cập nhật
    const {idPosts,value} = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(editPostsRequest,idPosts, value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(go(-1));
            toastSuccess(langs.update_successfully);
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showModalDialogs(false,"","",""));
    yield put(submitForm(false));
}

function* activeOnePostsSaga({payload}) {
    const {idPosts,active} = payload;
    try {
        const res = yield call(activeOnePostsRequest,idPosts,{Active: active});
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeOnePostsSuccess(idPosts,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}


function* activeAllPostsSaga({payload}) {
    const {active,listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idPosts;
    });
    const data = {active,list_id};
    try {
        const res = yield call(activeAllPostsRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeAllPostsSuccess(list_id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function* deleteAllPostsSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idPosts;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllPostsRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchPosts());
            toastSuccess(langs.delete_successfully);
        }else{
            toastError(langs.update_successfully);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}
function * getListTitleGroupSaga() {
    try {
        const res = yield call(getListTitleGroupRequest);
        const { Status,ListGroupTitle } = res.data;
        if (Status === true) {
            yield put(ac_getListTitleGroupSuccess(ListGroupTitle));
        }
    } catch (error) {
        console.log(error);
    }
}

// xóa ảnh slide
function *deleteImageSlideSaga({payload}) {
    const {data} = payload;
    try {
        const res =  yield call(deleteImageSlideRequest,data);
        const {Status} = res.data;
        if (Status === true) {
            yield put(ac_deleteImageSlideSuccess(Status));
        }
    } catch (error) {
        console.log(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

export function* PostsSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_POSTS,fetchPostsSaga),
        takeLatest(Types.FETCH_POSTS_CREATE,addPostsSaga),
        takeLatest(Types.FETCH_GET_POSTS_UPDATE,getEditPostsSaga),
        takeLatest(Types.FETCH_POSTS_UPDATE,editPostsSaga),
        takeLatest(Types.FETCH_POSTS_ACTIVE_ONE,activeOnePostsSaga),
        takeLatest(Types.FETCH_POSTS_ACTIVE_ALL,activeAllPostsSaga),
        takeLatest(Types.FETCH_POSTS_DELETE_ALL,deleteAllPostsSaga),
        takeLatest(Types.GET_LIST_TITLE_GROUP,getListTitleGroupSaga),
        takeLatest(Types.DELETE_IMAGE_SLIDE,deleteImageSlideSaga)
    ]);
}