import axiosService from '../axiosService';
import {API_ENDPOINT} from '../config';
//import qs from 'query-string';

export const requestLogin = data => {
    return axiosService.post(`${API_ENDPOINT}/admincp/login`,data);
}

export const requestPassWord = data => {
    return axiosService.post(`${API_ENDPOINT}/admincp/reset-password`,data);
}

export const requestchangePassWord = data => {
    return axiosService.post(`${API_ENDPOINT}/admincp/change-password`,data);
}

export const requestCheckToken = data => {
    return axiosService.post(`${API_ENDPOINT}/admincp/check-token`,data);
}



