import React from 'react'
import styles from './Header.less'

const logo = require('@/assets/timg.jpg')

class Header extends React.Component<any, any>{
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div className={styles.title}>
          <p className={styles.head_title}>Welcome to my site.</p>
          <p className={styles.sub_title}>Believe yourself. You can do anything.</p>
        </div>
      </div>
    );
  }
}

export default Header ;
