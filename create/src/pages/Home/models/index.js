/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-28 13:24:03 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-30 14:33:23
 */

import { getHomeBannerData, getHotRecommendList, getNewDiscList, getTopList } from '@/api/home';

export default {
  namespace: 'home',
  state: {
    banner: [],
    hotRecommendList: [],
    newDiscList: [],
    hotNewList: {},
    hotOriginalList: {},
    hotSoaringList: {}
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
    },
    *getTopList({ params }, { call, put }) {
      const res = yield call(getTopList, params);
      yield put({
        type: 'updateHotList',
        payload: res.playlist,
        idx: params.idx
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
    },
    updateHotList(state, { payload, idx }) {
      switch (idx) {
        case 1:
          return Object.assign({}, state, { hotNewList: payload });
        case 2:
          return Object.assign({}, state, { hotOriginalList: payload });
        case 3:
          return Object.assign({}, state, { hotSoaringList: payload });
        default:
          return state;
      }
    }
  }
}