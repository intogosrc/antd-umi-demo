import React from 'react'
import styles from './Menu.less'

class Menu extends React.Component<any, any>{
  render() {
    return <div className={styles.menu}>

      <p className={styles.menu_title}>菜单</p>
      <ul>
        <li><a href="/two">测试页面</a></li>
        <li><a href="/">用户列表</a></li>
        <li><a href="/user/new">新建用户</a></li>
        <li><a href="/showtime">数据更新测试</a></li>
      </ul>
    </div>;
  }
}

export default Menu ;
