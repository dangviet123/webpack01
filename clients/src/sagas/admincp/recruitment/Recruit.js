import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/recruitment/Recruit';
import { ac_fetchRecruitSuccess, 
    ac_fetchRecruit,
    ac_activeOneRecruitSuccess, 
    ac_activeAllRecruitSuccess,
    ac_getAddRecruitSuccess,
    ac_getEditRecruitSuccess,
    ac_showDetailRecruitSuccess
} from '../../../actions/admincp/recruitment/Recruit';
import { fetchRecruitRequest,
    addRecruitRequest,
    editRecruitRequest,
    activeOneRecruitRequest,
    activeAllRecruitRequest, 
    deleteAllRecruitRequest, 
    getAddRecruitRequest,
    getEditRecruitRequest,
    showDetailRecruitRequest,
    exportExcelRecruitRequest
} from '../../../apis/admincp/recruitment/Recruit';
import { submitForm, showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess } from '../../../helpers/toastHelper';
import {showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
import {go,push} from 'connected-react-router';
import {exportFileExcel} from  '../../../components/admincp/Shared/exportfileExcel';
import moment from 'moment';
function* fetchRecruitSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchRecruitRequest,new_params);
        const { datas,ListArea,ListVacancies } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchRecruitSuccess(data,current_page,last_page,total,ListArea,ListVacancies));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}

function* addRecruitSaga({payload}) { // thêm mới
    const { data_add } = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(addRecruitRequest,data_add);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.add_successfully);
            yield put(go(-1));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(submitForm(false));
}


function* editRecruitSaga({payload}) { // thêm mới
    const {idRecruit,value} = payload;
    try {
        yield put(submitForm(true));
        const res = yield call(editRecruitRequest,idRecruit, value);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchRecruit());
            toastSuccess(langs.update_successfully);
            yield put(go(-1));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(submitForm(false));
}

function* activeOneRecruitSaga({payload}) {
    const {idRecruit,active} = payload;
    try {
        const res = yield call(activeOneRecruitRequest,idRecruit,{Active: active});
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeOneRecruitSuccess(idRecruit,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null)); // clear modal
}


function* activeAllRecruitSaga({payload}) {
    const {active,listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idRecruit;
    });
    const data = {active,list_id};
    try {
        const res = yield call(activeAllRecruitRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            toastSuccess(langs.update_successfully);
            yield put(ac_activeAllRecruitSuccess(list_id,active));
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function* deleteAllRecruitSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idRecruit;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllRecruitRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchRecruit());
            toastSuccess(langs.delete_successfully);
        }else{
            toastError(langs.update_successfully);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function *getAddRecruitSaga() {
    yield put(showSubmit(true));
    try {
        const res = yield call(getAddRecruitRequest);
        const {Status,ListVacancies,ListArea} = res.data;
        if (Status === true) {
            yield put(ac_getAddRecruitSuccess(ListArea,ListVacancies));
        }
    } catch (error) {
        console.log(error);
    }
    yield put(showSubmit(false));
}

function *getEditRecruitSaga({payload}) {
    const {idRecruit} = payload;
    yield put(showSubmit(true));
    try {
        const res = yield call(getEditRecruitRequest,idRecruit);
        const {Status,ListVacancies,ListArea,edit} = res.data;
        if (Status === true) {
            yield put(ac_getEditRecruitSuccess(edit,ListArea,ListVacancies));
        }else if (Status === false) {
            yield put(push('/admincp'));
        }
    } catch (error) {
        console.log(error);
    }
    yield put(showSubmit(false));
}

function *showDetailRecruitSaga({payload}) {
    const {idRecruit} = payload;
    try {
        const res = yield call(showDetailRecruitRequest,idRecruit);
        const {Status,ListDetail} = res.data;
        if (Status === true) {
            yield put(ac_showDetailRecruitSuccess(ListDetail));
        }
    } catch (error) {
        console.log(error)
    }
}

function *exportExcelRecruitSaga({payload}) { 
    const {data} = payload;
    yield put(showSubmit(true));
    try {
        const res = yield call(exportExcelRecruitRequest,data);
        const {Status,datas} = res.data;
        if (Status === true) {
            const columcel = [
                langs.stt,
                langs.title,
                langs.job_posting_area,
                langs.wage,
                langs.vacancies,
                langs.date_from_recruit,
                langs.date_to_recruit,
                langs.company,
                langs.date_create,
                langs.user_create,
                langs.date_update,
                langs.user_update,
                langs.status
            ];
            let data = [];
            datas.forEach((el,index) => {
                const FullNameEdit = el.idUserUpdate > 0 ? el.FullNameEdit : '';
                const updated_at = el.idUserUpdate > 0 ? moment(el.updated_at).format('MM-DD-YYYY') : '';
                data.push([
                    index+1,
                    el.Recruit,
                    el.GroupArea,
                    el.Wage,
                    el.Vacancies,
                    moment(el.Startday).format('MM-DD-YYYY'),
                    moment(el.DateFinish).format('MM-DD-YYYY'),
                    el.DescriptionArea.toUpperCase(),
                    moment(el.created_at).format('MM-DD-YYYY'),
                    el.FullNameAdd,
                    updated_at,
                    FullNameEdit,
                    el.Active === 1 ? langs.activate : langs.inactive
                ]);
            });
            
            exportFileExcel({
                title: langs.recruit.toUpperCase(),
                filename: 'recruit',
                data: data,
                columcel: columcel,
                cols: [50,400,200,150,250,150,150,400,150,150,150,150,150]
            });
        }
    } catch (error) {
        console.log(error);
    }
    yield put(showSubmit(false));
}

export function* RecruitSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_RECRUIT,fetchRecruitSaga),
        takeLatest(Types.FETCH_RECRUIT_CREATE,addRecruitSaga),
        takeLatest(Types.FETCH_RECRUIT_UPDATE,editRecruitSaga),
        takeLatest(Types.FETCH_RECRUIT_ACTIVE_ONE,activeOneRecruitSaga),
        takeLatest(Types.FETCH_RECRUIT_ACTIVE_ALL,activeAllRecruitSaga),
        takeLatest(Types.FETCH_RECRUIT_DELETE_ALL,deleteAllRecruitSaga),
        takeLatest(Types.GET_ADD_RECRUIT,getAddRecruitSaga),
        takeLatest(Types.GET_EDIT_RECRUIT,getEditRecruitSaga),
        takeLatest(Types.SHOW_DETAIL_RECRUIT,showDetailRecruitSaga),
        takeLatest(Types.EXPORT_EXCEL_RECRUIT,exportExcelRecruitSaga)
    ]);
}