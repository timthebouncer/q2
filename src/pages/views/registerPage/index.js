import React from 'react'
import {Link} from "react-router-dom";
import Form from "../../../component/form";
import TextInput from "../../../component/form/input";
import './register.css'

const requiredValidator=val=>{

  if(!val){
    return ['此處為必填']
  }
  return []
}

const RegisterPage=()=>{

  return(
    <div className="register-wrapper">
      <h1 className="text-center">註冊</h1>
      <div className="sign-up">
        <Form className="form-wrapper">
          <TextInput name="username" label="帳號" validators={[requiredValidator]} />
          <TextInput name="nickname" label="使用者名稱" validators={[requiredValidator]} />
          <TextInput name="password" label="密碼" validators={[requiredValidator]} />
          <TextInput name="passwordConfirmation" label="確認密碼" validators={[requiredValidator]} />
          <Link className="register-btn" to='/'>返回登入</Link>
          <button className="submit-btn" type="submit">註冊</button>
        </Form>
      </div>
    </div>
  )


}

export default RegisterPage
