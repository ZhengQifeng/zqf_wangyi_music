/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-28 13:23:28 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-28 13:28:51
 */

import service from './index';

export const doLogin = params => service.post('/login/cellphone', params).then(res => res);