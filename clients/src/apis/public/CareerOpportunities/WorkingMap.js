import axiosService from '../../axiosService';
import {API_ENDPOINT} from  './../../config';
const url = 'public/career-opportunities/working-map';

export const fetchWorkingMapRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}