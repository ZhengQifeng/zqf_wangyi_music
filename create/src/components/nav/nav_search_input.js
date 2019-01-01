/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-01 20:50:35 
 * @Last Modified by:   zhengqifeng 
 * @Last Modified time: 2019-01-01 20:50:35 
 */

import style from './nav.less';
import { Icon } from 'antd';

class NavSearchInput extends React.Component {
  render() {
    return (
      <div className={style['nav-input']}>
        <Icon type='search' />
        <input 
          type='text' 
          placeholder={this.props.navSearch.placeholder} 
          value={this.props.navSearch.search}
          onChange={this.props.changeSearch}
        />
      </div>
    );
  }
}
export default NavSearchInput;