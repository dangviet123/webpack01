
import axiosService from '../../axiosService';

import {API_ENDPOINT} from  './../../config';
const url = 'public/big-event/community-responsibility';

export const fetchCommunityResponsibilityRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}

export const fetchCommunityResponsibilityDetailRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}/detail${params}`);
}