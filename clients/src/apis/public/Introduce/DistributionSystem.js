
import axiosService from '../../axiosService';

import {API_ENDPOINT} from  './../../config';
const url = 'public/Introduce/distribution-system';

export const fetchDistributionSystemRequest = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${url}${params}`);
}
