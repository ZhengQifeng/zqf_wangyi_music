/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-28 13:23:19 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-30 19:28:11
 */

import axios from 'axios';
import qs from 'qs';

const service = axios.create({
  baseURL: '/music',
  timeout: 5000,
  transformRequest: [function (data) {
    if (data instanceof FormData) {
      return data;
    }
    return qs.stringify(data);
  }],
  withCredentials: true
});

service.interceptors.request.use(config => {
  if (config.method == 'post') {
    config.data = {
      ...config.data,
      timestamp: Date.parse(new Date()) / 1000,
    }
  } else if (config.method == 'get') {
    config.params = {
      timestamp: Date.parse(new Date()) / 1000,
      ...config.params
    }
  }
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
