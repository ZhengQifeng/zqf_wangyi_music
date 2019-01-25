import React, { Component } from 'react';
import { connect } from 'dva';
import style from './BasicLayout.less';
import { NavLogo, NavMenu, NavSearchInput } from '../components/nav/index';

class BasicLayout extends Component {
  static navMenu = {
    '/home': '发现音乐',
    '/my': '我的音乐',
    '/friend': '朋友',
    '/store': '商城',
    '/nmusician': '音乐人',
    '/download': '下载客户端'
  }

  static navLogo = {
    title: '趣味音乐库'
  }

  changeSearch = event => {
    this.props.dispatch({
      type: 'nav/changeSearch',
      search: event.target.value,
    });
  }

  render() {
    const { navLogo, navMenu } = BasicLayout;
    const { navSearch, children } = this.props;
    return (
      <>
        <div className={style.nav}>
          <div className='content'>
            <NavLogo navLogo={navLogo} />
            <NavMenu navMenu={navMenu} {...this.props} />
            <NavSearchInput navSearch={navSearch} changeSearch={this.changeSearch} />
          </div>
        </div>
        {children}
      </ >
    );
  }
}

export default connect(({ nav }) => ({
  navSearch: nav.navSearch
}))(BasicLayout);