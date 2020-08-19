
import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/data-users/users';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}

export const addUsersRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}

export const editUsersRequest = (id,data) => {
    setHeader();
    return axiosService.put(`${API_ENDPOINT}/${url}/${id}`,data);
}

export const activeOneUsersRequest = (id,data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${id}/activeOne`,data);
}

export const activeAllUsersRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/activeAll`,data);
}

export const deleteAllUsersRequest = data => {
    setHeader();
    return axiosService.delete(`${API_ENDPOINT}/${url}/destroy`,{data});
}


export const fetchUsersRequest = params => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}


export const checkUserNameRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/checkUserName`,data);
}


export const checkEmailRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/checkEmail`,data);
}

export const fetchGroupsRequest = () => { // lấy danh sách all nhóm
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/list-groups`);
}