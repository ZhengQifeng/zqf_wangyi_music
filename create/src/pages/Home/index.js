/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-26 14:05:21 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-28 19:35:24
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import classNames from 'classnames';

import { SortWrapper } from '../../components/SortWrapper';
import { MusicCar } from '../../components/MusicCar';

import { Carousel, Icon } from 'antd';
import style from './index.less';

const homeCls = classNames({
  [style.normal]: true,
  mainContent: true
});

class Home extends Component {
  componentWillMount() {
    this.getBanner();
    this.getHotRecommendList();
    this.getNewDisc();
  }

  renderCarousel = () => {
    const { banner } = this.props;
    return (
      <div>
        <Carousel autoplay className={style.carousel}>
          {banner.map(item => (
            <div key={item.targetId}>
              <img src={item.imageUrl} />
            </div>
          ))}
        </Carousel>
      </div>
    )
  }

  renderHotRecommend = () => {
    const { hotRecommendList = [] } = this.props;
    return (
      <div className={style.sortWrapper}>
        {hotRecommendList.map((item, index) => (
          <div key={item.id} style={{ marginRight: index % 5 !== 4 ? '60px' : 0, marginBottom: '48px' }}>
            <MusicCar {...item} imgSrcName='coverImgUrl' />
          </div>
        ))}
      </div>
    )
  }

  renderNewDisc = () => {
    const { newDiscList = [] } = this.props;
    return (
      <>
        <div>
          <Icon type="left" />
        </div>
        <div>
          <Carousel dots={false}>
            <div>
              <div className={style.sortWrapper}>
                {newDiscList.slice(0, 5).map((item, index) => (
                  <MusicCar {...item} imgSrcName='picUrl' key={index} />
                ))}
              </div>
            </div>
            <div>
              <div className={style.sortWrapper}>
                {newDiscList.slice(5, 10).map((item, index) => (
                  <MusicCar {...item} imgSrcName='picUrl' key={index} />
                ))}
              </div>
            </div>
          </Carousel>
        </div>
        <div>
          <Icon type="right" />
        </div>
      </>
    )
  }

  getBanner = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/getHomeBannerData'
    });
  }

  getHotRecommendList = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/getHotRecommendList',
      params: {
        limit: 10
      }
    });
  }

  getNewDisc = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/getNewDiscList',
      params: {
        limit: 10
      }
    });
  }

  render() {
    const { hotRecommendList, newDiscList } = this.props;
    return (
      <>
        {this.renderCarousel()}
        <div className={homeCls}>
          <SortWrapper title='热门推荐'>
            {this.renderHotRecommend()}
          </SortWrapper>
          <SortWrapper title='新碟上架'>
            <div className={style.newDisc}>
              {this.renderNewDisc()}
            </div>
          </SortWrapper>
        </div>
      </ >
    )
  }
}

export default connect(({ home }) => ({
  ...home
}))(Home);
