
import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/home/dashboard';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}


export const fetchDashboardRequest = () => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}

export const changePassWordRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/change-pass`,data);
}

export const fetchLogOutRequest = () => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/logout`);
}


