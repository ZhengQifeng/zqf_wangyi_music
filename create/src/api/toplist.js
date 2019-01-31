/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-30 14:24:11 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-31 15:17:47
 */

 import service from './index';

 // 获取榜单分类
 export const getToplistType = params => service.get('/toplist', { params }).then(res => res);

 // 获取榜单歌曲详情
 export const getToplistData = params => service.get('/playlist/detail', { params }).then(res => res);