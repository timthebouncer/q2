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
},
Upload:{
  userImg(){
    return request.post('/users/uploadPicture')
  }
},
User:{
  updateUsername(data,config){
    return request.put('/users/updateName',data,config)
  }
}

}



export default api
