import axiosService from '../../axiosService';
import {API_ENDPOINT} from  './../../config';
const url = 'public/big-event/cultural-activities';

export const fetchCulturalActivitiesRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}

export const fetchCulturalActivitiesDetailRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}/detail${params}`);
}