import request from './http'

const api={

Login:{
  userLogin(data) {
    return request.post('/login', data)
  },
}

}



export default api
