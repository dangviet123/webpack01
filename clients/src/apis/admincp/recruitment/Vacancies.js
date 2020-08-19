
import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/recruitment/vacancies';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}

export const addVacanciesRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}

export const editVacanciesRequest = (idVacancies,data) => {
    setHeader();
    return axiosService.put(`${API_ENDPOINT}/${url}/${idVacancies}`,data);
}

export const activeOneVacanciesRequest = (idVacancies,data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idVacancies}/activeOne`,data);
}

export const activeAllVacanciesRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/activeAll`,data);
}

export const deleteAllVacanciesRequest = data => {
    setHeader();
    return axiosService.delete(`${API_ENDPOINT}/${url}/destroy`,{data});
}


export const fetchVacanciesRequest = params => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}