import React,{useState, createContext} from 'react'

const formData={
  data:{}
}

const UserContext = createContext(null)


const Form=()=>{
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


let provideValue={
    data:form.data,
    setFiledValue
}



  return(
    <UserContext.Provider value={provideValue}>
      <form onSubmit={onsubmit}>

      </form>
    </UserContext.Provider>
  )




}

export default Form
export {UserContext}
