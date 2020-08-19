import axiosService from '../../axiosService';
//import qs from 'query-string';
import {API_ENDPOINT} from  './../../config';
const url = 'admincp/contents/posts';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}

export const addPostsRequest = data => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}
export const getEditPostsRequest = (idPosts) => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}/${idPosts}/edit`);
}

export const editPostsRequest = (idPosts,data) => {
    setHeader();
    return axiosService.put(`${API_ENDPOINT}/${url}/${idPosts}`,data);
}

export const activeOnePostsRequest = (idPosts,data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/${idPosts}/activeOne`,data);
}

export const activeAllPostsRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/activeAll`,data);
}

export const deleteAllPostsRequest = data => {
    setHeader();
    return axiosService.delete(`${API_ENDPOINT}/${url}/destroy`,{data});
}


export const fetchPostsRequest = params => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}

export const getListTitleGroupRequest = () => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/list-title`);
}

export const deleteImageSlideRequest = (data) => {
    setHeader();
    return axiosService.post(`${API_ENDPOINT}/${url}/delete-slide`,data);
}