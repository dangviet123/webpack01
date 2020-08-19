
import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/contacts/map';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}

export const addMapRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}

export const editMapRequest = (idMap,data) => {
    setHeader();
    return axiosService.put(`${API_ENDPOINT}/${url}/${idMap}`,data);
}

export const activeOneMapRequest = (idMap,data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idMap}/activeOne`,data);
}

export const activeAllMapRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/activeAll`,data);
}

export const deleteAllMapRequest = data => {
    setHeader();
    return axiosService.delete(`${API_ENDPOINT}/${url}/destroy`,{data});
}


export const fetchMapRequest = params => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}