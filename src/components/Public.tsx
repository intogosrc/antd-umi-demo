import React from 'react'
import styles from './Public.less'
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import { Button } from 'antd';
import Form from '@/components/RegisterForm';

class Public extends React.Component<any, any>{
  constructor(props:any) {
    super(props);
  }

  render() {
    return <div className={styles.main}>
      <Header />

      <div>
        <Menu />

        <div className={styles.content}>
          {this.props.children}

        </div>
      </div>

    </div> ;

  }
}

export default Public
