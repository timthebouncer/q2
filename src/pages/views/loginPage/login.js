import React from 'react'
import Form from "../../../component/form";
import TextInput from "../../../component/form/input";
import './index.css'


const requiredValidator=val=>{

  if(!val){
    return ['此處為必填']
  }
  return []
}



const LoginPage=()=>{
  return(
    <div className="min-w-500 bg-gray-100">
      <h1 className="text-center">註冊</h1>
      <div className="sign-up">
        <Form className="formWrapper" onSubmit={data => console.log(data)}>
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
          />
          <button className="submit-btn" type="submit">
            註冊
          </button>
          <button className="submit-btn" type="submit">
            登入
          </button>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
