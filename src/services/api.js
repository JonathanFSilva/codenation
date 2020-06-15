import axios from 'axios';

import config from '../config';

const api = axios.create({
  baseURL: `${config.baseUrl}${config.version}`,
});

export default api;
