import React, { useContext, useEffect } from "react";
import { FormContext } from "./index";


const withForm = InputComponent => {
  const WrappedWithForm = props => {
    const { errors, data, setFieldValue, registerInput } = useContext(
      FormContext
    );

    useEffect(
      () =>
        registerInput({
          name: props.name,
          validators: props.validators
        }),
      []
    );

    const onChange = val => {
      setFieldValue(props.name, val);
      if (props.onChange) {
        props.onChange(val);
      }
    };
    const inputValue = data[props.name];
    const inputErrors = errors[props.name] || [];

    return (
      <InputComponent
        {...props}
        errors={inputErrors}
        value={inputValue}
        onChange={onChange}
      />
    );
  };
  return WrappedWithForm;
};

export default withForm;
