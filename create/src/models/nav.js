/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-26 09:20:47 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-26 10:17:49
 */

export default {
  namespace: 'nav',
  state: {
    navSearch: ''
  },
  reducers: {
    'changeSearch'(state, { search: navSearch }) {
      return Object.assign({}, state, {
        navSearch
      });
    }
  }
}