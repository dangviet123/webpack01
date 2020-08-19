
import axiosService from '../../axiosService';

import {API_ENDPOINT} from  './../../config';
const url = 'public/big-event/training-development';

export const fetchTrainingDevelopmentRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}

export const fetchTrainingDevelopmentDetailRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}/detail${params}`);
}