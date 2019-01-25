/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-01 20:50:35 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-25 17:00:40
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
        placeholder='请输入'
        value={navSearch}
        onChange={changeSearch}
      />
    </div>
  );
}
