import axiosService from '../../axiosService';

import {API_ENDPOINT} from  './../../config';
const url = 'public/contact-support/office-phannam';

export const fetchOfficePhannamRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}