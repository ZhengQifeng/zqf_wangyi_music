/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-30 14:14:53 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-30 19:06:55
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import classNames from 'classnames';

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
    const { toplistData: { coverImgUrl, name, tracks = [] } } = this.props;
    return (
      <div className={style.toplistRg}>
        <div className={style.musicListDesc}>
          <div className={style.descPic}>
            <img src={coverImgUrl} />
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
    history.push({ pathname : `/toplist/${item.id}` });
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