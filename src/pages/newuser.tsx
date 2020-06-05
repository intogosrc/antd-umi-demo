import React, { useState } from 'react';
import Public from '@/components/Public';
import {Button} from 'antd' ;
import Form from '@/components/RegisterForm' ;

import styles from './newuser.less';

export default () => {
  const [name,onEdit] = useState('Leo')

  const gg = ()=>{

    let names = [
      'jack','lucy','leo','peter'
    ]

    let index:number = Math.ceil(Math.random()*100)%4

    onEdit(names[index])
  }

  return (
    <Public>
      <p>{name}</p>
      <Button onClick={()=>{gg()}}>edit</Button>
      <Form url="/data/post" />
    </Public>

  );
}
