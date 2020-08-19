import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/contents/group-title';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}

export const addGroupTitleRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}

export const editGroupTitleRequest = (idGroupTitle,data) => {
    setHeader();
    return axiosService.put(`${API_ENDPOINT}/${url}/${idGroupTitle}`,data);
}

export const activeOneGroupTitleRequest = (idGroupTitle,data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idGroupTitle}/activeOne`,data);
}

export const activeAllGroupTitleRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/activeAll`,data);
}

export const deleteAllGroupTitleRequest = data => {
    setHeader();
    return axiosService.delete(`${API_ENDPOINT}/${url}/destroy`,{data});
}


export const fetchGroupTitleRequest = params => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}