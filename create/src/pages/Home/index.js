/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-26 14:05:21 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-26 17:08:51
 */

import React, { Component } from 'react';
import classNames from 'classnames';

import { SortWrapper } from '../../components/SortWrapper';
import { MusicCar } from '../../components/MusicCar';

import { Carousel } from 'antd';
import style from './index.less';

const homeCls = classNames({
  [style.normal]: true,
  mainContent: true
});

export default class Home extends Component {
  renderCarousel = () => (
    <div>
      <Carousel autoplay className={style.carousel}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    </div>
  );

  render() {
    return (
      <>
        {this.renderCarousel()}
        <div className={homeCls}>
          <SortWrapper title='热门推荐'>
            <div>
              <MusicCar />
            </div>
          </SortWrapper>
          home
        </div>
      </ >
    )
  }
}
