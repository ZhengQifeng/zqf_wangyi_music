/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-01 20:44:20 
 * @Last Modified by:   zhengqifeng 
 * @Last Modified time: 2019-01-01 20:44:20 
 */

import { connect } from 'dva';
import { HomeNav } from '../../components/home/index';

class Home extends React.Component {
  render() {
    return (
      <HomeNav homeMenu={this.props.homeMenu} history={this.props.history} />
    )
  }
}

export default connect(({ home }) => ({
  homeMenu: home.homeMenu
}))(Home);