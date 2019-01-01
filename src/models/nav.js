export default {
  namespace: 'nav',
  state: {
    navLogo: {
      title: '趣味音乐库'
    },
    navMenu: {
      '/home': '发现音乐',
      '/my': '我的音乐',
      '/friend': '朋友',
      '/store': '商城',
      '/nmusician': '音乐人',
      '/download': '下载客户端'
    },
    navSearch: {
      search: '',
      placeholder: '音乐/电影/书籍'
    }
  },
  reducers: {
    'changeSearch'(state, { search: value }) {
      return Object.assign({}, state, {
        navSearch: {
          search: value
        }
      });
    },
  }
}