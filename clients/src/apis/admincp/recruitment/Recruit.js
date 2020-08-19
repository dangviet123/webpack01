
import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/recruitment/recruit';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}

export const addRecruitRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}

export const editRecruitRequest = (idRecruit,data) => {
    setHeader();
    return axiosService.put(`${API_ENDPOINT}/${url}/${idRecruit}`,data);
}

export const activeOneRecruitRequest = (idRecruit,data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idRecruit}/activeOne`,data);
}

export const activeAllRecruitRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/activeAll`,data);
}

export const deleteAllRecruitRequest = data => {
    setHeader();
    return axiosService.delete(`${API_ENDPOINT}/${url}/destroy`,{data});
}


export const fetchRecruitRequest = params => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}

export const getAddRecruitRequest = () => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}/create`);
}

export const getEditRecruitRequest = (idRecruit) => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}/${idRecruit}/edit`);
}

export const showDetailRecruitRequest = (idRecruit) => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}/${idRecruit}/show-detail`);
}



export const exportExcelRecruitRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/excel`,data);
}
