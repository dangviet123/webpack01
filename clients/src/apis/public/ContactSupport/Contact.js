
import axiosService from '../../axiosService';

import {API_ENDPOINT} from  './../../config';
const url = 'public/contact-support/contact';

export const fetchContactRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}

export const addContactRequest = (datas) => {
    return axiosService.post(`${API_ENDPOINT}/${url}/create`,datas);
}