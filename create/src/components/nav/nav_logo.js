/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-01 20:50:23 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-25 17:00:45
 */
import React from 'react';
import style from './nav.less';
import { Icon } from 'antd';

export default function (props) {
  const { navLogo: { title } } = props;
  return (
    <div className={style['nav-logo']}>
      <Icon type='dropbox' />
      <div className={style['nav-doc']}>{title}</div>
    </div>
  )
}
