
import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/contacts/support';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}



export const deleteAllSupportRequest = data => {
    setHeader();
    return axiosService.delete(`${API_ENDPOINT}/${url}/destroy`,{data});
}


export const fetchSupportRequest = params => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}

export const checkProcessOneRequest = idSupport => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idSupport}/check-one`);
}

export const checkProcessAllRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/check-all`,data);
}

export const showDetailSupportRequest = (idSupport) => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}/${idSupport}/show-detail`);
}