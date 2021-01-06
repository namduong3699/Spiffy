import axios from '../libs/axios';

export const getApiToken = params => axios.post('/auth/token', params).then(({ data }) => data);
