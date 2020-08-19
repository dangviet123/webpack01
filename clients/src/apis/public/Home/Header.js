
import axiosService from '../../axiosService';

import {API_ENDPOINT} from  './../../config';
const url = 'public/header';

export const fetchMenuRequest = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}