
import axiosService from '../../axiosService';

import {API_ENDPOINT} from  './../../config';
const url = 'public/home';

export const fetchHomeRequest = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}