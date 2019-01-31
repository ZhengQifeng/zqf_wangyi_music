/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-28 13:23:28 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-31 10:17:15
 */

import service from './index';

export const doLogin = params => service.get('/login/cellphone', { params }).then(res => res);