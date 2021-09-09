import React,{useContext} from 'react'
import {UserContext} from './testForm'


const withTestForm=InputComponent=>{

  const WrappedWithForm=(props)=>{
    const {setFiledValue} = useContext(UserContext)
    console.log(props)

    const onchange=val=>{
      console.log(val,123)
      setFiledValue(props.name, val)
      if (props.onChange) {
        props.onChange(val);
      }
    }


    return <InputComponent {...props} value={data[props.name]} onChange={onchange} />
  }

  return WrappedWithForm
}


export default withTestForm
