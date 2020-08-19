
import axiosService from '../../axiosService';

import {API_ENDPOINT} from  './../../config';
const url = 'public/service';

export const fetchServiceRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}

export const fetchServiceDetailRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}/detail${params}`);
}