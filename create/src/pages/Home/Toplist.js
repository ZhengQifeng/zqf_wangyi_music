/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-30 14:14:53 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-31 17:02:37
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import classNames from 'classnames';
import moment from 'moment';

import { Icon, Button } from 'antd';
import style from './Toplist.less';

const mainCls = classNames({
  mainContent: true,
  [style.mainContent]: true
})

class Toplist extends Component {
  state = {
    id: undefined
  }

  componentWillMount() {
    console.log(process);
    const { match: { params: { id } } } = this.props;
    id ? this.handleDirectGetData(id) : this.handleIndirectGetData();
  }

  componentWillUpdate(_, newState) {
    const { id: newId } = newState;
    const { id: prevId } = this.state;
    newId !== prevId && this.getToplistData(newId);
  }

  renderToplistType = () => {
    const { toplistType = [] } = this.props;
    const { id } = this.state;
    return (
      <div className={style.toplistLf}>
        <div className={style.toplistLfTitle}>云音乐特色榜</div>
        <ul className={style.toplistLfMain}>
          {toplistType.map((item, index) => (
            <li key={item.id}
              className={classNames({ [style.toplistLi]: true, [style.active]: id ? id == item.id : index === 0 })}
              onClick={() => this.handleSwitchListType(item)}
            >
              <img src={item.coverImgUrl} />
              <div className={style.toplistLiDesc}>
                <span className='title'>{item.name}</span>
                <span className={style.updateFre}>{item.updateFrequency}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderToplistMain = () => {
    const { 
      toplistData: { 
        coverImgUrl, 
        name, 
        trackUpdateTime, 
        subscribedCount, 
        shareCount, 
        commentCount, 
        trackCount, 
        playCount,
        tracks = [] 
      } 
    } = this.props;
    const { Group } = Button;
    const thTdCls = classNames({
      [style.tdNom]: true,
      [style.td]: true,
      title: true
    });
    const thTdTitleCls = classNames({
      [style.thTdTitle]: true,
      [style.td]: true,
      title: true
    });
    return (
      <div className={style.toplistRg}>
        <div className={style.musicListDesc}>
          <div className={style.descPic}>
            <img src={coverImgUrl} />
          </div>
          <div className={style.intro}>
            <div>
              <span className='title'>{name}</span>
              <div className={style.updateTime}>
                <Icon type="clock-circle" />
                <span>最近更新：{moment(trackUpdateTime).format('MM月DD日')}</span>
              </div>
            </div>
            <div className={style.opera}>
              <Group>
                <Button type="primary">
                  <Icon type="play-circle" />播放
                </Button>
                <Button type="primary" icon="plus" />
              </Group>
              <Button>
                <Icon type="folder-add" />({subscribedCount})
              </Button>
              <Button>
                <Icon type="share-alt" />({shareCount})
              </Button>
              <Button>
                <Icon type="download" />下载
              </Button>
              <Button>
                <Icon type="message" />({commentCount})
              </Button>
            </div>
          </div>
        </div>
        <div className={style.musicListMain}>
          <div className={style.listTitle}>
            <div>
              <span className={style.listTitleWd}>歌曲列表</span>
              <span>{trackCount}首歌</span>
            </div>
            <div>
              <span>播放：</span>
              <span className={style.listCountWd}>{playCount}</span>
              <span>次</span>
            </div>
          </div>
          <div className={style.musicListTb}>
            <div className={style.th}>
              <div className={thTdCls}></div>
              <div className={thTdTitleCls}>标题</div>
              <div className={thTdCls}>时长</div>
              <div className={thTdCls}>歌手</div>
            </div>
            {tracks.map((item, index) => (
              <div className={style.tr} key={item.id}>
                <div className={thTdCls}>{index + 1}</div>
                <div className={thTdTitleCls}>标题</div>
                <div className={thTdCls}>时长</div>
                <div className={thTdCls}>歌手</div>
              </div>
            ))}
          </div>
        </div>
        right
      </div>
    )
  }

  handleDirectGetData = async id => {
    this.getToplistType();
    await this.setState({
      id
    });
    await this.getToplistData(id)
  }

  handleIndirectGetData = async () => {
    await this.getToplistType();
    const { toplistType = [] } = this.props;
    const id = toplistType[0] && toplistType[0].id;
    await this.setState({
      id
    });
  }

  handleSwitchListType = async item => {
    const { history } = this.props;
    history.push({ pathname: `/toplist/${item.id}` });
    await this.setState({
      id: item.id
    });
  }

  getToplistType = () => {
    const { dispatch } = this.props;
    return dispatch({
      type: 'toplist/getToplistType'
    });
  }

  getToplistData = id => {
    const { dispatch } = this.props;
    dispatch({
      type: 'toplist/getToplistData',
      params: {
        id
      }
    });
  }

  render() {
    return (
      <>
        <div className={mainCls} style={{ padding: 0 }}>
          {this.renderToplistType()}
          {this.renderToplistMain()}
        </div>
      </>
    )
  }
}

export default connect(({ toplist }) => ({
  ...toplist
}))(Toplist);