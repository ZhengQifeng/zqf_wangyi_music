export default {
  namespace: 'nav',
  state: {
    navSearch: '123'
  },
  reducers: {
    'changeSearch'(state, { search: navSearch }) {
      return Object.assign({}, state, {
        navSearch
      });
    }
  }
}