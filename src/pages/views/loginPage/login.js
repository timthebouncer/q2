import React,{useContext} from 'react'
import Form from "../../../component/form";
import TextInput from "../../../component/form/input";
import './index.css'
import Service from '../../../api/api'
import {Link} from "react-router-dom";
import {AuthToken} from "../../../App";
import { useHistory } from "react-router-dom";

const requiredValidator=val=>{

  if(!val){
    return ['此處為必填']
  }
  return []
}


const LoginPage=()=>{
  const history = useHistory()
  const setAuth = useContext(AuthToken)
  const loginFun=async(data)=>{
    await Service.Login.userLogin(data)
      .then((res)=>{
        localStorage.setItem('token', res.data.token)
        setAuth(res.data.token)
        history.push('/index')
      })
  }

  return(
    <div className="login-wrapper">
      <h1 className="text-center">登入</h1>
      <div className="sign-in">
        <Form className="formWrapper" onSubmit={data => loginFun(data)}>
          <TextInput
            name="username"
            placeholder="請輸入帳號"
            label="帳號"
            validators={[requiredValidator]}
          />
          <TextInput
            name="password"
            type="password"
            placeholder="請輸入密碼"
            label="密碼"
            validators={[requiredValidator]}
          />
          <Link className="register-btn" to='/register'>註冊</Link>
          <button className="submit-btn" type="submit">
            登入
          </button>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
