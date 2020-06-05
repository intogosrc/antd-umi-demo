import React, { useState } from 'react';
import Public from '@/components/Public';
import Form from '@/components/RegisterForm' ;
import { connect } from 'umi';
import styles from './showtime.less'

class Logic extends React.Component {

  constructor(props) {
    super(props);

    this.prevPageClicked = this.prevPageClicked.bind(this)
    this.nextPageClicked = this.nextPageClicked.bind(this)
    this.goPageClicked = this.goPageClicked.bind(this)

    // this.state = {
    //   page:1
    // } // Using the State Hook

    this.page = 1
  }

  componentDidMount() {
    console.log("componentDidMount called")

    const { dispatch } = this.props;

    console.log("dispatch ",dispatch);
    console.log("props ",this.props);

    if (dispatch) {
      dispatch({
        type: 'users/getUserList',
        page: this.page,
      });
    }

  }

  prevPageClicked(event) {
    const { dispatch } = this.props;

    console.log("dispatch ",dispatch);
    console.log("props ",this.props);

    if (dispatch) {
      dispatch({
        type: 'users/getUserList',
        page: this.page-1,
      });
    }
  }

  nextPageClicked(event) {
    const { dispatch } = this.props;

    if (dispatch) {
      dispatch({
        type: 'users/getUserList',
        page: this.page+1
      });
    }
  }

  goPageClicked(event, p) {
    const { dispatch } = this.props;

    if (dispatch) {
      dispatch({
        type: 'users/getUserList',
        page: p
      });
    }
  }

  render() {
    const { userList } = this.props;

    console.log("user list ", userList)

    let listUsers = [] ;
    let listPages = [] ;

    if (userList.users && userList.users.length > 0) {
      listUsers = userList.users.map((d)=>
        <tr key={d.id}>
          <td>{d.id}</td>
          <td>{d.name}</td>
          <td>{d.age}</td>
        </tr>
      );

      // deal page info
      this.page = userList.page_info.current ;
      let pageTotal = Math.ceil(userList.page_info.amount/userList.page_info.limit) ;

      for (let i=1; i<=pageTotal; i++) {
        listPages.push(<button onClick={(e)=>{this.goPageClicked(e,i)}} key={i}>{i}</button> )
      }

    }

    return (
      <Public>
        <div>
          <table>
            <tbody>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
              </tr>
              {listUsers}
            </tbody>
          </table>
        </div>
        <div className={styles.page_list}>
          <button onClick={this.prevPageClicked}>上一页</button>
          {listPages}
          <button onClick={this.nextPageClicked}>下一页</button>
        </div>
        <Form url="/data/post" />
      </Public>
    );
  }
}

// @ts-ignore
export default connect(({ users }) => ({
  userList:users.userList,
}))(Logic);
