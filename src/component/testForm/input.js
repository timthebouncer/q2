import React from 'react'
import withTestForm from "./withTestForm";

const TestInput=props=>{
  console.log(props.errors)
  const renderErrors=()=>{

    return <span>{props.errors}</span>
  }

  const onChange = e => {
    const val = e.target.value;
    props.onChange(val);
  };


  return(
    <div>
      <input
        className='border-2 border-indigo-600'
        onChange={onChange}
        name={props.name}
        value={props.value}
      />
      {renderErrors()}
    </div>
  )

}

export default withTestForm(TestInput)
