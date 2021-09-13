import React from 'react'
import {Link} from "react-router-dom";
import Form from "../../../component/form";
import TextInput from "../../../component/form/input";
import './register.css'
import Service from '../../../api/api'
import message from '../../../component/toast/toast'
import { useHistory } from "react-router-dom";



const requiredValidator=val=>{

  if(!val){
    return ['此處為必填']
  }
  return []
}

const usernameValidator=(val,formData)=>{

  let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/
  if(!pattern.test(formData.username)){
    return ['格式不符合']
  }
  return []
}

const passwordValidator=(val,formData)=>{
    let pattern2 = /^[A-z]+[0-9]+[A-z]/
if(!pattern2.test(formData.password) && (!formData.password.length >=4 && !formData.password.length<=8)){
        return ['格式不符合']
    }
return []
}

const passwordMatchedValidator = (val, formData) => {
  if (val !== formData.password) {
    return ["需要與密碼一致"];
  }

  return [];
};


const registerBtn=async (data,history)=>{
 await Service.Register.userRegister(data)
      .then(res=>{
          message.success(res.data.message,'success')
          history.push('/')
      })
      .catch(err=>{
          message.error(err.response.data.message,'error')
      })
}


const RegisterPage=()=>{
    let history = useHistory()
  return(
    <div className="register-wrapper">
      <h1 className="text-center">註冊</h1>
      <div className="sign-up">
        <Form className="form-wrapper" onSubmit={(data)=>registerBtn(data,history)}>
            <TextInput className={'ml-3 w-80'} name="username" label="帳號" placeholder="必須是信箱" validators={[requiredValidator,usernameValidator]} />
            <TextInput className={'ml-3 w-80'} name="nickname" label="使用者名稱" placeholder="可選,對其他用戶顯示的名稱" />
            <TextInput className={'ml-3 w-80'} name="password" type="password" label="密碼" placeholder="4-8字元;首尾必須是英文;中間必須是數字"
                       validators={[requiredValidator,passwordValidator]} />
            <TextInput className={'ml-3 w-80'} name="passwordConfirmation" type="password" label="確認密碼" placeholder="4-8字元;首尾必須是英文;中間必須是數字"
                       validators={[requiredValidator,passwordMatchedValidator]} />
          <Link className="register-btn" to='/'>返回登入</Link>
          <button className="submit-btn" type="submit">註冊</button>
        </Form>
      </div>
    </div>
  )


}

export default RegisterPage
