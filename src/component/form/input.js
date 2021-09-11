import React,{useState,useRef} from "react";
import { isEmpty } from "lodash";
import withForm from "../../component/form/withForm";
import './index.css'


const defaultProps = {
  value: "",
  type: "text"
};

const suffix =(toggleEye)=>{
  return (
      toggleEye === true? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
          </svg>
      ):(
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
      )
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
      console.log(111)
      e.preventDefault()
      setToggleEye(!toggleEye)
      inputRef.current.type=toggleEye ? "text" : "password"
    }



  return (
    <div>
      <label className="text-left">{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        className={`${props.name}` === 'password_confirmation' ? 'mr-7 ml-5' : 'ml-5'}
        placeholder={props.placeholder}
        onChange={onChange}
        value={props.value}
        ref={inputRef}
      />
      <div onClick={(e)=>togglePassword(e,toggleEye)} className={'relative -top-6 left-48'}>
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
