/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-26 15:13:03 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-26 17:04:48
 */

import React, { PureComponent } from 'react';

import style from './SortWrapper.less';

import { Icon } from 'antd';

export default class SortWrapper extends PureComponent {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div className={style.sortWrapper}>
          <div className='fl'>
            <div className='iconfont icon-sort'></div>
            {title && (<span className={style.sortTitle}>{title}</span>)}
          </div>
          <div className='fl'>
            <span>更多</span>
            <Icon type="ellipsis" className={style.iconMore}/>
          </div>
        </div>
        {children && (<div>{children}</div>)}
      </div>
    )
  }
}