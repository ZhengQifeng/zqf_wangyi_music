/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-01 20:50:29 
 * @Last Modified by:   zhengqifeng 
 * @Last Modified time: 2019-01-01 20:50:29 
 */

import styles from './nav.less';
import { Menu } from 'antd';

class NavMenu extends React.Component {
  history = this.props.history

  changeMenu({ key }) {
    this.history.push(key);
  }
  
  render() {
    return (
      <div className={styles.normal}>
        <Menu
          mode='horizontal'
          theme='dark'
          className={styles.nav}
          defaultSelectedKeys={[`/${this.history.location.pathname.split('/')[1]}`]}
          onClick={e => this.changeMenu(e)}
        >
          {Object.keys(this.props.navMenu).map(item => 
            <Menu.Item 
              className={styles['nav-item']}
              key={item}
            >{this.props.navMenu[item]}</Menu.Item>
          )}
        </Menu>
      </div>
    );
  }
}

export default NavMenu;
