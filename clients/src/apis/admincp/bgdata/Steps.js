
import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/bgdata/steps';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}

export const addStepsRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}

export const getEditStepsRequest = (idSteps) => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}/${idSteps}/edit`);
}

export const editStepsRequest = (idSteps,data) => {
    setHeader();
    return axiosService.put(`${API_ENDPOINT}/${url}/${idSteps}`,data);
}

export const activeOneStepsRequest = (idSteps,data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idSteps}/activeOne`,data);
}

export const activeAllStepsRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/activeAll`,data);
}

export const deleteAllStepsRequest = data => {
    setHeader();
    return axiosService.delete(`${API_ENDPOINT}/${url}/destroy`,{data});
}


export const fetchStepsRequest = params => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}