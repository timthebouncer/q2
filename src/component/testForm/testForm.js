import React,{useState, createContext} from 'react'


//初始值
const formData={
  data:{},
  validators:{},
  errors:{}
}

const UserContext = createContext(null)

//Form組件存放
const Form=props=>{
  const[form, setForm] = useState(formData)


  const setFiledValue=(name,value)=>{
    setForm(state=>{
      return{
        ...state,
        data:{
          ...state.data,
          [name]:value
        }
      }
    })
  }

  const requireFiledValue=({name, validators})=>{
    setForm(state =>{
      return{
        ...state,
        validators: {
          ...state.validators,
          [name]:state.validators||[]
        },
        errors: {
          ...state.errors,
          [name]:[]
      }
      }
    })
  }

  const onSubmit=e=>{
    e.preventDefault()
    props.onSubmit(form.data)

  }

//資料及方法共享
let provideValue={
    data:form.data,
    errors:form.errors,
    setFiledValue,
    requireFiledValue
}


  //最終返回一個form表單
  return(
    <UserContext.Provider value={provideValue}>
      <form onSubmit={onSubmit}>
        {props.children}
      </form>
    </UserContext.Provider>
  )


}

export default Form
export {UserContext}
