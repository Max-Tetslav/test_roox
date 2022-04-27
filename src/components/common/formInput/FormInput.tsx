import classNames from 'classnames';
import { ErrorMessage, Field, useField } from 'formik';
import React from 'react';
import cl from './FormInput.module.scss';

interface IFormInputProps {
  title: string;
  name: string;
  type: string;
  disabled: boolean;
}

const FormInput: React.FC<IFormInputProps> = ({ title, ...props }) => {
  const [field, meta] = useField(props);

  const classes = classNames(cl.input, {
    [cl.error]: meta.error,
  });

  return (
    <label className={cl.label} htmlFor={field.name}>
      {title}
      <Field {...field} {...props} className={classes} />
      <ErrorMessage name={field.name}>
        {(msg) => <span className={cl.errorText}>{msg}</span>}
      </ErrorMessage>
    </label>
  );
};

export default FormInput;
