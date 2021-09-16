import React,{useState,useRef} from "react";
import { isEmpty } from "lodash";
import withForm from "@/component/form/withForm";
import './index.css'
import {eyeOpen,eyeClose} from '@/Icon/svg'

const defaultProps = {
  value: "",
  type: "text"
};

const suffix =(toggleEye)=>{
  return (
      toggleEye === true? eyeOpen:eyeClose
  )
}

const TextInput = props => {

  const [toggleEye, setToggleEye] = useState('true')

  const inputRef = useRef('')

  const hasError = !isEmpty(props.errors);

  const renderErrors = () => {
    if (!hasError) {
      return null;
    }

    const errors = props.errors.map((errMsg, i) => (
      <li key={`${props.name}-error-${i}`} className="error">
        {errMsg}
      </li>
    ));

    return <ul className="error-messages">{errors}</ul>;
  };

  const onChange = e => {
    const val = e.target.value;
    props.onChange(val);
  };

  const togglePassword=(e,toggleEye)=>{
      e.preventDefault()
      setToggleEye(!toggleEye)
      inputRef.current.type=toggleEye ? "text" : "password"
    }

  return (
    <div>
      <label className={props.label.length <=3  ? 'ml-12' : (props.label.length ===4?'ml-5':'')}>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        className={`${props.className} form-control`}
        placeholder={props.placeholder}
        onChange={onChange}
        value={props.value}
        ref={inputRef}
      />
      <div onClick={(e)=>togglePassword(e,toggleEye)} className={'relative -top-6 left-96'}>
        {props.type==='password'?suffix(toggleEye):''}
      </div>

      {renderErrors()}
    </div>
  );
};

TextInput.defaultProps = defaultProps;

const FormTextInput = withForm(TextInput);

// export { TextInput };
export default FormTextInput;
