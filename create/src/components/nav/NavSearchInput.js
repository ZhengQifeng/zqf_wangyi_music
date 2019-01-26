/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-01 20:50:35 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-26 09:51:55
 */
import React from 'react';
import style from './nav.less';
import { Icon } from 'antd';

export default function (props) {
  const { navSearch, changeSearch } = props;
  return (
    <div className={style['nav-input']}>
      <Icon type='search' />
      <input
        type='text'
        placeholder='音乐/视频/电台/用户'
        value={navSearch}
        onChange={changeSearch}
      />
    </div>
  );
}
