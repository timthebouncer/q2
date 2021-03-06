import React, { useState } from "react";
import { isEmpty } from "lodash";


const initState = props => {
  return {
    data: {},
    validators: {},
    errors: {}
  };
};

let FormContext;
const { Provider } = (FormContext = React.createContext());

const Form = props => {
  const [formState, setFormState] = useState(initState(props));

  const onSubmit = e => {
    e.preventDefault();

    if (validate()) {
      props.onSubmit(formState.data);
    }
  };

  const validate = () => {
    const { validators } = formState;
    // always reset form errors
    // in case there was form errors from backend
    setFormState(state => ({
      ...state,
      errors: {}
    }));
    if (isEmpty(validators)) {
      return true;
    }
    // 遍瀝所有驗證訊息並取收集完才return
    //Object.entries(validators) 把物件轉為陣列
    const formErrors = Object.entries(validators).reduce(
      //初始值errors為空物件 //當前值為對應的輸入框名字及驗證方法包為一個陣列
      (errors, [name, validators]) => {
        const { data } = formState;
                                        //初始值為[] //當前值為驗證function
        const messages = validators.reduce((result, validator) => {
          //沒輸入的話value為空
          const value = data[name];
          //把value傳進去驗證方法如果為空會返回錯誤訊息
          const err = validator(value, data);
          return [...result, ...err];
        }, []);
        if (messages.length > 0) {
          errors[name] = messages;
        }
        return errors;
      },
      {}
    );
    if (isEmpty(formErrors)) {
      return true;
    }

    setFormState(state => ({
      ...state,
      errors: formErrors
    }));

    return false;
  };

  // const onReset = e => {
  //   e.preventDefault();
  //   setFormState(initState(props));
  //   if (props.onReset) {
  //     props.onReset();
  //   }
  // };

  const setFieldValue = (name, value) => {
    setFormState(state => {
      return {
        ...state,
        data: {
          ...state.data,
          [name]: value
        },
        errors: {
          ...state.errors,
          [name]: []
        }
      };
    });
  };

  const registerInput = ({ name, validators }) => {
    setFormState(state => {
      return {
        ...state,
        validators: {
          ...state.validators,
          [name]: validators || []
        },
        // clear any errors
        // errors: {
        //   ...state.errors,
        //   [name]: []
        // }
      };
    });

    // returning unregister method
    // return () => {
    //   setFormState(state => {
    //     // copy state to avoid mutating it
    //     const { data, errors, validators: currentValidators } = { ...state };
    //
    //     // clear field data, validations and errors
    //     delete data[name];
    //     delete errors[name];
    //     delete currentValidators[name];
    //
    //     return {
    //       data,
    //       errors,
    //       validators: currentValidators
    //     };
    //   });
    // };
  };

  const providerValue = {
    errors: formState.errors,
    data: formState.data,
    setFieldValue,
    registerInput
  };
  return (
    <Provider value={providerValue}>
      <form
        onSubmit={onSubmit}
        className={props.className}
      >
        {props.children}
      </form>
    </Provider>
  );
};


export default Form;
export { FormContext };
