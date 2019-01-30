/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-30 14:30:33 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-30 16:09:23
 */

import { getToplistType, getToplistData } from '@/api/toplist';

export default {
  namespace: 'toplist',
  state: {
    toplistType: [],
    toplistData: {}
  },
  effects: {
    *getToplistType(_, { call, put }) {
      const res = yield call(getToplistType);
      yield put({
        type: 'updateToplistType',
        payload: res.list
      });
      return Promise.resolve();
    },
    *getToplistData({ params }, { call, put }) {
      const res = yield call(getToplistData, params);
      yield put({
        type: 'updateToplistData',
        payload: res.playlist
      });
    }
  },
  reducers: {
    updateToplistType(state, { payload }) {
      return Object.assign({}, state, { toplistType: payload });
    },
    updateToplistData(state, { payload }) {
      return Object.assign({}, state, { toplistData: payload });
    }
  }
}