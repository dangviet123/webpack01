import axiosService from '../../axiosService';
import {API_ENDPOINT} from  './../../config';
const url = 'public/career-opportunities/instructions-for-filing';

export const fetchInstructionsForFilingRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}