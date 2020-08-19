
import axiosService from '../axiosService';
import {API_ENDPOINT} from  '../config';
const url = 'admincp/side-bar';

function setHeader() {
    let {access_token, token_type} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
    axiosService.request().use(function (config) {
        config.headers.Authorization =  `${token_type} ${access_token}`;
        config.headers.common['Content-Type'] =  `application/json`;
        return config;
    });
}

export const getSideBarRequest = () => {
    setHeader();
    return axiosService.get(`${API_ENDPOINT}/${url}/getMenu`);
}