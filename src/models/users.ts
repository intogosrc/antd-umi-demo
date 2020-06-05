function getdata(page:number, limit:number){

  return new Promise((resolve, reject) => {
    // http://localhost:8003
    // /api/user/list
    // http://localhost:8080/api/user/list
    fetch(`http://localhost:8080/api/user/list2?page=${page}&limit=${limit}`).then((response)=>{
      return response.json() ;
    }).then((jsonData)=>{
      resolve(jsonData)
    })
  })

}

//@ts-ignore
function saveUser(fields) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8080/api/user/add?username=${fields.username}&age=${fields.age}`).then((response)=>{
      return response.json() ;
    }).then((jsonData)=>{
      //@ts-ignore
      resolve(jsonData)
    })
  })
  
}

export default {
  namespace: 'users',
  state: {
    userList:[],
    userAdd:{
      "show":false,
      "result":{}
    }
  },
  effects:{
    // @ts-ignore
    *getUserList(action, { call, put }) {
      console.log("get user list model ...", action.page)
      const response = yield call(getdata, action.page, 5);
      yield put({
        type: 'saveUserList',
        payload: response,
      });
    },
    // @ts-ignore
    *addUser(action, {call, put}) {
      const response = yield call(saveUser, action.fields) ;

      yield put({
        type: 'updateUserAdd',
        payload: response,
      })
    },
    // @ts-ignore
    *addUserAndFlush(action, {call, put}) {
      const response = yield call(saveUser, action.fields) ;

      yield put({
        type: 'updateUserAdd',
        payload: response,
      })

      yield put({
        type: 'getUserList',
      }) // 这里添加后调用了获取，在 showtime 例子中会直接更新列表数据，todo 加上分页
    }
  },
  reducers: {
    // delete(state, { payload: id }) {
    //   return state.filter(item => item.id !== id);
    // },
    // @ts-ignore
    saveUserList(state, action) {
      console.log("save user list model ...")
      return { ...state, userList: action.payload || [] };
    },
    // @ts-ignore
    updateUserAdd(state, action) {
      let r = {
        "show": true,
        "result": action.payload ,
      }
      return { ...state, userAdd: r }
    }
  },
}
