
import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/bgdata/menu-type';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}

export const addMenuTypeRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}

export const editMenuTypeRequest = (id,data) => {
    setHeader();
    return axiosService.put(`${API_ENDPOINT}/${url}/${id}`,data);
}

export const activeOneMenuTypeRequest = (id,data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${id}/activeOne`,data);
}

export const activeAllMenuTypeRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/activeAll`,data);
}

export const deleteAllMenuTypeRequest = data => {
    setHeader();
    return axiosService.delete(`${API_ENDPOINT}/${url}/destroy`,{data});
}


export const fetchMenuTypeRequest = params => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}

// list menu 

export const getMenuRequest = idTypeMenu => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}/${idTypeMenu}/list-menu`);
}

export const checkSlugRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/check-slug`,data);
}

export const getListCategoryRequest = idTypeMenu => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}/${idTypeMenu}/list-category`);
}

export const addMenuRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/created-menu`,data);
}

export const editMenuRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/update-menu`,data);
}

export const activeMenuRequest = (idMenu,data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idMenu}/active-menu`,data);
}

export const deleteMenuRequest = idMenu => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idMenu}/detete-menu`);
}

export const changeMenuRequest = (data) => { // change menu 
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/order-by-menu`,data);
}

export const loadPermissionRequest = idMenu => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idMenu}/load-permision`);
}

export const savePermissionRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/save-permision`,data);
}


