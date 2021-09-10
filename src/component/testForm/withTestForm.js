import React,{useContext, useEffect} from 'react'
import {UserContext} from './testForm'


const withTestForm=InputComponent=>{

  const WrappedWithForm=(props)=>{
    const {data,setFiledValue,requireFiledValue} = useContext(UserContext)

    useEffect(
      () =>
        requireFiledValue({
          name: props.name,
          validators: props.validators
        }),
      []
    );


    //把對應輸入框的name及輸入值傳進去
    const onchange=val=>{
      setFiledValue(props.name, val)
      // if (props.onChange) {
      //   console.log(props.onChange)
      //   props.onChange(val);
      // }
    }

    const inputValue = data[props.name]

    return <InputComponent {...props} value={inputValue} onChange={onchange} />
  }

  return WrappedWithForm
}


export default withTestForm
