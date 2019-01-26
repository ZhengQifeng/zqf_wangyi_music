/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-26 10:27:32 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-26 14:06:56
 */

import React, { Component } from 'react';

import style from './HomeLayout.less';
import { NavMenu } from '../components/nav/index';

export default class HomeLayout extends Component {
  static navMenu = {
    '/': '推荐',
    '/toplist': '排行版',
    '/playlist': '歌单',
    '/djradio': '主播电台',
    '/artist': '歌手',
    '/album': '新碟上架'
  }

  render() {
    const { navMenu } = HomeLayout;
    const { children } = this.props;
    return (
      <>
        <div className={style.nav}>
          <div className='content'>
            <NavMenu navMenu={navMenu} {...this.props} />
          </div>
        </div>
        {children}
      </ >
    );
  }
}
