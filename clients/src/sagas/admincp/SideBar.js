import { takeLatest,all, call, put } from 'redux-saga/effects';
import * as Types from '../../constants/admincp/SideBar';
import {getSideBarRequest} from '../../apis/admincp/SideBar';
import {ac_getSideBarSuccess} from '../../actions/admincp/SiderBar';
function *getSideBarSaga() {
    try {
        if (sessionStorage.getItem("ListSideBar") === null) {
            const res = yield call(getSideBarRequest);
            sessionStorage.setItem("ListSideBar",JSON.stringify(res.data));
            const {Status,datas,UserOnline,ListPermision,list_icon} = res.data;
            if (Status === true) {
                yield put(ac_getSideBarSuccess(datas,UserOnline,ListPermision,list_icon));
            }
        }else{
            const {datas,UserOnline,ListPermision,list_icon} = JSON.parse(sessionStorage.getItem('ListSideBar'));
            yield put(ac_getSideBarSuccess(datas,UserOnline,ListPermision,list_icon));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* SideBarSagas() {
    yield all([
        takeLatest(Types.GET_SIDE_BAR,getSideBarSaga)
    ]);
}