/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-26 17:05:34 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-29 10:14:51
 */

import React, { PureComponent } from 'react';
import classNames from 'classnames';

import style from './MusicCar.less';

const musicCls = classNames({
  [style.musicCar]: true,
  musicCar: true
});

export default class MusicCar extends PureComponent {
  render() {
    const { imgSrcName, name, trackCount } = this.props;
    const { [imgSrcName]: picUrl } = this.props;
    return (
      <div className={musicCls}>
        <div className='musicCarPic'>
          <img src={picUrl} className={style.musicImg} />
        </div>
        <div style={{ marginTop: '8px' }}>
          <span className='musicCarName'>{name}</span>
        </div>
      </div>
    )
  }
}