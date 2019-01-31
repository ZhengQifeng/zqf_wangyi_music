/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-28 13:23:09 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-31 10:17:54
 */

import service from './index';

// 获取首页轮播图信息
export const getHomeBannerData = params => service.get('/banner', { params }).then(res => res);

// 获取热门推荐歌单
export const getHotRecommendList = params => service.get('/top/playlist', { params }).then(res => res);

// 获取上架新碟歌单
export const getNewDiscList = params => service.get('/top/album', { params }).then(res => res);

// 获取排行榜歌单
export const getTopList = params => service.get('/top/list', { params }).then(res => res);