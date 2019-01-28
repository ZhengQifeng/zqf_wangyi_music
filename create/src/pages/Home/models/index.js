/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-28 13:24:03 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-28 15:46:28
 */

import { getHomeBannerData, getHotRecommendList, getNewDiscList } from '@/api/home';

export default {
  namespace: 'home',
  state: {
    banner: [],
    hotRecommendList: [],
    newDiscList: []
  },
  effects: {
    *getHomeBannerData(_, { call, put }) {
      const res = yield call(getHomeBannerData);
      yield put({
        type: 'updateBanner',
        payload: res.banners
      });
    },
    *getHotRecommendList({ params }, { call, put }) {
      const res = yield call(getHotRecommendList, params);
      yield put({
        type: 'updateHotRecommendList',
        payload: res.playlists
      });
    },
    *getNewDiscList({ params }, { call, put }) {
      const res = yield call(getNewDiscList, params);
      yield put({
        type: 'updateNewDiscList',
        payload: res.albums
      });
    }
  },
  reducers: {
    updateBanner(state, { payload }) {
      return Object.assign({}, state, { banner: payload });
    },
    updateHotRecommendList(state, { payload }) {
      return Object.assign({}, state, { hotRecommendList: payload });
    },
    updateNewDiscList(state, { payload }) {
      return Object.assign({}, state, { newDiscList: payload });
    }
  }
}