import axiosService from '../../axiosService';
import {API_ENDPOINT} from  './../../config';
const url = 'public/career-opportunities/jobs-are-recruiting';

export const fetchJobsAreRecruitingRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}

export const fetchJobsAreRecruitingDetailRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}/detail${params}`);
}

export const addProfileRequest = (datas) => {
    return axiosService.post(`${API_ENDPOINT}/${url}/create-profile`,datas);
}