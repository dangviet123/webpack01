import axiosService from '../../axiosService';
import {API_ENDPOINT} from  './../../config';
const url = 'public/career-opportunities/recruitment-steps';

export const fetchRecruitmentStepsRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}