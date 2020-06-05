import React, { useState } from 'react';
import styles from './ProductList.less'
import { connect } from 'umi';

class RegisterForm extends React.Component<any, any> {
  targetUrl:string

  constructor(props:any) {
    super(props);

    this.state = {username:"",age:""}
    this.targetUrl = this.props.url

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange(event:any){
    console.log(`${event.target.name} = ${event.target.value}`)
    // this.setState(eval(`${event.target.name}:${event.target.value}`))
    // this.setState({`${event.target.name}`:event.target.value})
    switch (event.target.name) {
      case "username":
        this.setState({username:event.target.value}) ;break;
      case "age":
        this.setState({age:event.target.value}) ;break;
    }
  }

  handleSubmit(event:any){
    console.log(event) ;
    console.log(`submit to ${this.targetUrl}`)
    console.log(this.state)
  }

  onSubmit(event:any){
    console.log(event) ;
    console.log(`submit to ${this.targetUrl}`);
    console.log(this.state);

    const { dispatch } = this.props;

    if (dispatch) {
      dispatch({
        type: 'users/addUser',
        fields: this.state,
      });
    }
  }

  render() {
    return (
      <form>
        <p><input type="text" name="username" value={this.state.username} onChange={this.handleChange} className={styles.textInput} /></p>
        <p><input type="text" name="age" value={this.state.age} onChange={this.handleChange} className={styles.textInput} /></p>
        <p><button type="button" onClick={this.onSubmit} >submit</button></p>
      </form>
  ) ;
  }
}

// export default RegisterForm
// @ts-ignore
export default connect(({users})=>({
  userAddResult: users.userAdd
}))(RegisterForm) ;