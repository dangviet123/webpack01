import { takeLatest,all, call, put } from 'redux-saga/effects';
import * as Types from '../../../constants/public/Home/Header';
import { ac_fetchMenuSuccess } from '../../../actions/public/Home/Header';
import { fetchMenuRequest }  from '../../../apis/public/Home/Header';

function* fetchMenuSaga() {
    try {
        if (sessionStorage.getItem("ListMenuPublic") === null) {
            const res = yield call(fetchMenuRequest);
            const { datas } = res.data;
            sessionStorage.setItem("ListMenuPublic",JSON.stringify(res.data));
            yield put(ac_fetchMenuSuccess(datas));
        }else{
            const {datas} = JSON.parse(sessionStorage.getItem('ListMenuPublic'));
            yield put(ac_fetchMenuSuccess(datas));
        }
        
    } catch (error) {
        console.log(error);
    }
}

export function* HeaderSagas() { // sagaa tổng
    yield all([
        takeLatest(Types.FETCH_MENU,fetchMenuSaga)
    ]);
}