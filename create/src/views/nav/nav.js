/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-01 20:50:47 
 * @Last Modified by:   zhengqifeng 
 * @Last Modified time: 2019-01-01 20:50:47 
 */

import { connect } from 'dva';
import style from './nav.less';
import { NavLogo, NavMenu, NavSearchInput } from '../../components/nav/index';

let that;

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  changeSearch = event => {
    this.props.dispatch({
      type: 'nav/changeSearch',
      search: event.target.value,
    });
  }

  render() {
    return (
      <div className={style.nav}>
        <div className='content'>
          <NavLogo navLogo={this.props.navLogo} />
          <NavMenu navMenu={this.props.navMenu} history={this.props.history} />
          <NavSearchInput navSearch={this.props.navSearch} changeSearch={this.changeSearch} />
        </div>
      </div>
    );
  }
}

export default connect(({ nav }) => ({
  navLogo: nav.navLogo,
  navMenu: nav.navMenu,
  navSearch: nav.navSearch
}))(Nav);