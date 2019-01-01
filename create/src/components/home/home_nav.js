/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-01 20:44:09 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-01 20:50:02
 */

import { Menu } from 'antd';

class HomeNav extends React.Component {
  history = this.props.history

  changeMenu({ key }) {
    this.history.push(`/${this.history.location.pathname.split('/')[1]}${key}`);
  }

  render() {
    return (
      <Menu
        mode='horizontal'
        theme='dark'
        defaultSelectedKeys={[`/${this.history.location.pathname.split('/')[2]}`]}
        onClick={e => this.changeMenu(e)}
      >
        {Object.keys(this.props.homeMenu).map(item =>
          <Menu.Item
            key={item}
          >{this.props.homeMenu[item]}</Menu.Item>
        )}
      </Menu>
    )
  }
}

export default HomeNav;