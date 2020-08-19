
import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/recruitment/profile';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}


export const deleteAllProfileRequest = data => {
    setHeader();
    return axiosService.delete(`${API_ENDPOINT}/${url}/destroy`,{data});
}


export const fetchProfileRequest = params => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}

export const checkProcessOneRequest = idProfile => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idProfile}/check-one`);
}

export const checkProcessAllRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/check-all`,data);
}

export const showDetailProfileRequest = (idProfile) => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}/${idProfile}/show-detail`);
}



export const exportExcelProfileRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/excel`,data);
}