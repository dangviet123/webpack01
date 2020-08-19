
import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/bgdata/slider';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}

export const addSliderRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}

export const getEditSliderRequest = (idSlider) => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}/${idSlider}/edit`);
}

export const editSliderRequest = (idSlider,data) => {
    setHeader();
    return axiosService.put(`${API_ENDPOINT}/${url}/${idSlider}`,data);
}

export const activeOneSliderRequest = (idSlider,data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idSlider}/activeOne`,data);
}

export const activeAllSliderRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/activeAll`,data);
}

export const deleteAllSliderRequest = data => {
    setHeader();
    return axiosService.delete(`${API_ENDPOINT}/${url}/destroy`,{data});
}


export const fetchSliderRequest = params => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}