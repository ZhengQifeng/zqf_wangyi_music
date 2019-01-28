/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-28 13:23:09 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-28 15:21:32
 */

import service from './index';

// 获取首页轮播图信息
export const getHomeBannerData = params => service.post('/banner', params).then(res => res);

// 获取热门推荐歌单
export const getHotRecommendList = params => service.post('/top/playlist', params).then(res => res);

// 获取上架新碟歌单
export const getNewDiscList = params => service.post('/top/album', params).then(res => res);