import { takeLatest,all, call, put,select } from 'redux-saga/effects';
import * as Types from '../../../constants/admincp/recruitment/Profile';
import { ac_fetchProfileSuccess, 
    ac_fetchProfile,
    ac_showDetailProfileSuccess
} from '../../../actions/admincp/recruitment/Profile';
import { 
    fetchProfileRequest,
    deleteAllProfileRequest,
    checkProcessOneRequest,
    checkProcessAllRequest,
    showDetailProfileRequest,
    exportExcelProfileRequest
} from '../../../apis/admincp/recruitment/Profile';
import { showSubmit } from '../../../actions/login/login';
import { toastErrorNetWork,toastError,toastSuccess,toastWarning } from '../../../helpers/toastHelper';
import {showConfirmAlert} from '../../../actions/admincp/ModalDialogs';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
import {exportFileExcel} from  '../../../components/admincp/Shared/exportfileExcel';
import moment from 'moment';
function* fetchProfileSaga() {
    const params = yield select(state => state.router.location.search);
    const limit = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const new_params = (params !== '') ? `${params}&limit=${limit}` : `?limit=${limit}`;
    yield put(showSubmit(true));
    try {
        const res = yield call(fetchProfileRequest,new_params);
        const { datas,ListVacancies,ListArea } = res.data;
        const {data,current_page,last_page,total} = datas;
        yield put(ac_fetchProfileSuccess(data,current_page,last_page,total,ListArea,ListVacancies));
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showSubmit(false));
}


function *checkProcessOneSaga({payload}) {
    const {idProfile} = payload;
    try {
        const res = yield call(checkProcessOneRequest,idProfile);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchProfile());
            toastSuccess(langs.delete_successfully);
        }else if (Status === false) {
            toastWarning(langs.profile_proces_check);
            yield put(ac_fetchProfile());
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        console.log(error);
    }
    yield put(showConfirmAlert(false,null,null));
}
function *checkProcessAlllSaga({payload}) {
    const {listcheck} = payload;
    try {
        const res = yield call(checkProcessAllRequest,listcheck);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchProfile());
            toastSuccess(langs.process_profile_success);
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        console.log(error);
    }
    yield put(showConfirmAlert(false,null,null));
}
function* deleteAllProfileSaga({payload}) {
    const {listcheck} = payload;
    let list_id = [];
    listcheck.forEach((element,index) => {
        list_id[index] = element.idProfile;
    });
    const data = {list_id: list_id};
    try {
        const res = yield call(deleteAllProfileRequest,data);
        const { Status } = res.data;
        if (Status === true) {
            yield put(ac_fetchProfile());
            toastSuccess(langs.process_profile_success);
        }else{
            toastError(langs.error_please_try_again);
        }
    } catch (error) {
        toastErrorNetWork(error);
    }
    yield put(showConfirmAlert(false,null,null));
}

function *showDetailProfileSaga({payload}) {
    const {idProfile} = payload;
    try {
        const res = yield call(showDetailProfileRequest,idProfile);
        const {Status,ListDetail} = res.data;
        if (Status === true) {
            yield put(ac_showDetailProfileSuccess(ListDetail));
        }
    } catch (error) {
        console.log(error)
    }
}

function *exportExcelProfileSaga({payload}) { 
    const {data} = payload;
    yield put(showSubmit(true));
    try {
        const res = yield call(exportExcelProfileRequest,data);
        const {Status,datas} = res.data;
        if (Status === true) {
            const columcel = [
                langs.stt,
                langs.full_name,
                langs.birth_day,
                langs.sex,
                langs.marriage,
                langs.phone,
                langs.email_address,
                langs.place_of_birth,
                langs.current_residence,
                langs.title,
                langs.educational_level,
                langs.desired_working_place,
                langs.experience,
                langs.desired_salary,
                langs.notes,
                langs.date_send,
                langs.vacancies,
                langs.job_posting_area,
                langs.recruitment_salary,
                langs.job_position,
                langs.company,
                langs.date_check,
                langs.user_check,
                langs.status_process
            ];
            let data = [];
            datas.forEach((el,index) => {
                const FullNameCheck = el.idCheck > 0 ? el.FullNameCheck : '';
                const DateCheck = el.DateCheck !== null ? moment(el.DateCheck).format('MM-DD-YYYY') : '';
                data.push([
                    index+1,
                    el.FullName,
                    moment(el.DateBirthDay).format('MM-DD-YYYY'),
                    el.idGender === 1 ? langs.male : langs.female,
                    el.idMarriage === 1 ? langs.alone : langs.married,
                    el.Phone,
                    el.Email,
                    el.Permanent,
                    el.CurrentPlace,
                    el.Profile,
                    el.Education,
                    el.DesiredWork,
                    el.YearsExperience,
                    el.Salary,
                    el.Notes !== null ? el.Notes : '',
                    moment(el.DateAdd).format('MM-DD-YYYY'),
                    el.Recruit,
                    el.GroupArea,
                    el.Wage,
                    el.Vacancies,
                    el.DescriptionArea.toUpperCase(),
                    DateCheck,
                    FullNameCheck,
                    el.Check === 1 ? langs.active_process : langs.inactive_process
                ]);
            });
            
            exportFileExcel({
                title: langs.application_profile.toUpperCase(),
                filename: 'Profile',
                data: data,
                columcel: columcel,
                cols: [50,150,100,100,100,100,200,350,350,400,200,200,200,200,300,200,250,150,150,250,350,100,100,100]
            });
        }
    } catch (error) {
        console.log(error);
    }
    yield put(showSubmit(false));
}
export function* ProfileSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_PROFILE,fetchProfileSaga),
        takeLatest(Types.FETCH_PROFILE_DELETE_ALL,deleteAllProfileSaga),
        takeLatest(Types.CHECK_PROCESS_ONE,checkProcessOneSaga),
        takeLatest(Types.CHECK_PROCESS_ALL,checkProcessAlllSaga),
        takeLatest(Types.SHOW_DETAIL_PROFILE,showDetailProfileSaga),
        takeLatest(Types.EXPORT_EXCEL_PROFILE,exportExcelProfileSaga)
    ]);
}