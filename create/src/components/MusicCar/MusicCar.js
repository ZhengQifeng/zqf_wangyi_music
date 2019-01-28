/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-26 17:05:34 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-28 15:46:56
 */

import React, { PureComponent } from 'react';

import style from './MusicCar.less';

export default class MusicCar extends PureComponent {
  render() {
    const { imgSrcName, name, trackCount } = this.props;
    const { [imgSrcName]: picUrl } = this.props;
    return (
      <div className={style.musicCar}>
        <div className='musicCarPic'>
          <img src={picUrl} className={style.musicImg} />
        </div>
        <div style={{ marginTop: '8px' }}>
          <span>{name}</span>
        </div>
      </div>
    )
  }
}