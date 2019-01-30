/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-26 14:05:21 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-30 14:52:18
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import classNames from 'classnames';

import { SortWrapper } from '../../components/SortWrapper';
import { MusicCar } from '../../components/MusicCar';

import { Spin, Carousel, Icon, Row, Col } from 'antd';
import style from './index.less';

const spinCls = classNames({
  mainContent: true,
  [style.spin]: true
})

class Home extends Component {
  componentWillMount() {
    this.getBanner();
    this.getHotRecommendList();
    this.getNewDisc();
    this.getHotList();
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
      <div className={style.newDiscBox}>
        <Row className={style.newDisc}>
          <Col span={1}>
            <Icon type="left" onClick={this.handleCarouselLeft} />
          </Col>
          <Col span={22}>
            <Carousel dots={false} ref='discCaro'>
              <div>
                <div className={style.sortWrapper}>
                  {newDiscList.slice(0, 6).map((item, index) => (
                    <MusicCar {...item} imgSrcName='picUrl' key={index} />
                  ))}
                </div>
              </div>
              <div>
                <div className={style.sortWrapper}>
                  {newDiscList.slice(6, 12).map((item, index) => (
                    <MusicCar {...item} imgSrcName='picUrl' key={index} />
                  ))}
                </div>
              </div>
            </Carousel>
          </Col>
          <Col span={1}>
            <Icon type="right" onClick={this.handleCarouselRight} />
          </Col>
        </Row>
      </div>
    )
  }

  renderHotList = () => {
    const { hotNewList, hotOriginalList, hotSoaringList } = this.props;
    const hotList = [hotNewList, hotOriginalList, hotSoaringList];
    return (
      <div className={style.hotMusic}>
        {hotList.map((item, index) => (
          <div className={style.hotMusicLi} key={index}>
            {this.renderHotListItem(item)}
          </div>
        ))}
      </div>
    )
  }

  renderHotListItem = listItem => (
    <>
      <div className='top'>
        <img className={style.hotMuiscPic} src={listItem.coverImgUrl} />
        <div className='intro'>
          <div className='title'>{listItem.name}</div>
          <div className='opera'>
            <Icon type="play-circle" />
            <Icon type="folder-add" />
          </div>
        </div>
      </div>
      <ul className='main'>
        {listItem.tracks && listItem.tracks.slice(0, 10).map((item, index) => (
          <li className={style.hotMusicLiItem} key={item.id}>
            <div>
              <span className='serial' style={{color: index < 3 ? '#c10d0c' : null}}>{index + 1}</span>
              <span>{item.name}</span>
            </div>
            <div className='opera'>
              <Icon type="play-circle" />
              <Icon type="plus" />
              <Icon type="folder-add" />
            </div>
          </li>
        ))}
      </ul>
    </>
  )

  handleCarouselLeft = () => {
    this.refs.discCaro.prev();
  }

  handleCarouselRight = () => {
    this.refs.discCaro.next();
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
        limit: 12
      }
    });
  }

  getHotList = () => {
    const { dispatch } = this.props;
    const idxs = [1, 2, 3];
    for (let idx of idxs) {
      dispatch({
        type: 'home/getTopList',
        params: {
          idx
        }
      });
    }
  }

  render() {
    const { homeLoading } = this.props;
    return (
      <>
        {homeLoading ? (
          <div className={spinCls} style={{paddingTop: 120}}>
            <Spin />
          </div>
        ) : (
          <>
            {this.renderCarousel()}
            <div className='mainContent'>
              <SortWrapper title='热门推荐'>
                {this.renderHotRecommend()}
              </SortWrapper>
              <SortWrapper title='新碟上架'>
                {this.renderNewDisc()}
              </SortWrapper>
              <SortWrapper title='榜单'>
                {this.renderHotList()}
              </SortWrapper>
            </div>
          </>
        )}
      </ >
    )
  }
}

export default connect(({ home, loading }) => ({
  ...home,
  homeLoading: loading.models.home
}))(Home);
