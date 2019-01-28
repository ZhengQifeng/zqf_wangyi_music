/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-28 13:23:19 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-28 13:34:08
 */

import axios from 'axios';
import qs from 'qs';

const service = axios.create({
  baseURL: 'music',
  timeout: 5000,
  transformRequest: [function(data) {
    if (data instanceof FormData) {
      return data;
    }
    return qs.stringify(data);
  }],
  withCredentials: true
});

service.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

service.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error);
});

export default service;