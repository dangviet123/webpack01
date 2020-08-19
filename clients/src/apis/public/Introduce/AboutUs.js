
import axiosService from '../../axiosService';

import {API_ENDPOINT} from  './../../config';
const url = 'public/Introduce/about-us';

export const fetchAboutUsRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}