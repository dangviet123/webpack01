import axiosService from '../../axiosService';
import {API_ENDPOINT} from  './../../config';
const url = 'public/big-event';

export const fetchBigEventRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}