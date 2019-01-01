/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-01 20:50:23 
 * @Last Modified by:   zhengqifeng 
 * @Last Modified time: 2019-01-01 20:50:23 
 */

 import style from './nav.less';
 import { Icon } from 'antd';

 class NavLogo extends React.Component {
   render() {
     return (
       <div className={style['nav-logo']}>
         <Icon type='dropbox' />
         <div className={style['nav-doc']}>{this.props.navLogo.title}</div>
       </div>
     )
   }
 }

 export default NavLogo;