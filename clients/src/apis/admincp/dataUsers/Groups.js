
import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/data-users/groups';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}

export const addGroupsRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}

export const editGroupsRequest = (id,data) => {
    setHeader();
    return axiosService.put(`${API_ENDPOINT}/${url}/${id}`,data);
}

export const activeOneGroupsRequest = (id,data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${id}/activeOne`,data);
}

export const activeAllGroupsRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/activeAll`,data);
}

export const deleteAllGroupsRequest = data => {
    setHeader();
    return axiosService.delete(`${API_ENDPOINT}/${url}/destroy`,{data});
}


export const fetchGroupsRequest = params => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}

export const getMenuRequest = (idGroups,idTypeMenu) => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}/${idGroups}/${idTypeMenu}/permission`);
}


export const loadPermissionRequest = (idMenu,idGroups) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idMenu}/${idGroups}/load-permision`);
}

export const savePermissionRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/save-permision`,data);
}

export const activePermissionRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/active-permision`,data);
}