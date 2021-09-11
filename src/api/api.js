import request from './http'

const api={

Login:{
  userLogin(data) {
    return request.post('/login', data)
  },
},
Register:{
  userRegister(data){
    return request.post('/register',data)
  }
},
Auth:{
  userAuth(params){
    return request.get('/user',params)
  }
}

}



export default api
