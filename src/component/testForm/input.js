import React from 'react'
import withTestForm from "./withTestForm";

const TestInput=props=>{



  const onChange = e => {
    const val = e.target.value;
    props.onChange(val);
  };


  return(
    <input className='border-2 border-indigo-600'
    onChange={onChange}
     name={props.name}
           value={props.value}
    />
  )

}

export default withTestForm(TestInput)
