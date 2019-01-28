/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-26 09:21:09 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-28 15:34:53
 */

import React, { Component } from 'react';
import { connect } from 'dva';

import style from './BasicLayout.less';
import { NavLogo, NavMenu, NavSearchInput } from '../components/nav/index';
import Footer from './Footer';

class BasicLayout extends Component {
  static navMenu = {
    '/': '发现音乐',
    '/my': '我的音乐',
    '/friend': '朋友',
    '/store': '商城',
    '/nmusician': '音乐人',
    '/download': '下载客户端'
  }

  static navLogo = {
    title: 'T-Music'
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
            <div className={style.navLf}>
              <NavLogo navLogo={navLogo} />
              <NavMenu navMenu={navMenu} {...this.props} />
            </div >
            <NavSearchInput navSearch={navSearch} changeSearch={this.changeSearch} />
          </div>
        </div>
        <div className={style.bar}></div>
        <main>
          {children}
        </main>
        <Footer />
      </ >
    );
  }
}

export default connect(({ nav }) => ({
  navSearch: nav.navSearch
}))(BasicLayout);