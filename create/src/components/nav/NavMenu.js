/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-01 20:50:29 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-30 17:30:42
 */
import React, { Component } from 'react';
import styles from './nav.less';
import { Menu } from 'antd';

export default class NavMenu extends Component {
  history = this.props.history

  changeMenu({ key }) {
    this.history.push(key);
  }

  render() {
    const { navMenu } = this.props;
    return (
      <div className={styles.normal}>
        <Menu
          mode='horizontal'
          theme='dark'
          defaultSelectedKeys={[`/${this.history.location.pathname.split('/')[1]}`]}
          onClick={e => this.changeMenu(e)}
        >
          {Object.keys(navMenu).map(item =>
            <Menu.Item
              className='navItem'
              key={item}
            ><span className='itemWord'>{navMenu[item]}</span></Menu.Item>
          )}
        </Menu>
      </div>
    );
  }
}
