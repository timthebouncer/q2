import React from "react";
import { isEmpty } from "lodash";
import withForm from "../../component/form/withForm";
import './index.css'


const defaultProps = {
  value: "",
  type: "text"
};

const TextInput = props => {
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
      />
      {renderErrors()}
    </div>
  );
};

TextInput.defaultProps = defaultProps;

const FormTextInput = withForm(TextInput);

// export { TextInput };
export default FormTextInput;
