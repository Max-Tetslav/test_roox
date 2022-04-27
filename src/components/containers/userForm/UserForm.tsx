import React, { useCallback, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { EButtonNames, EButtonThemes, EButtonTypes } from 'models/buttonTypes';
import { EInputNames, EInputTypes } from 'models/inputTypes';
import FormInput from 'components/common/formInput/FormInput';
import MyButton from 'components/common/myButton/MyButton';
import cl from './UserForm.module.scss';

const UserForm: React.FC = () => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const editHandler = useCallback(() => {
    setIsInputDisabled(!isInputDisabled);
    setIsSubmitDisabled(!isSubmitDisabled);
  }, [isInputDisabled]);

  return (
    <Formik
      initialValues={{
        name: user.name,
        username: user.username,
        email: user.email,
        street: user.address.street,
        city: user.address.city,
        zipcode: user.address.zipcode,
        phone: user.phone,
        website: user.website,
        comment: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Неверный email адрес')
          .required('Обязательное поле!'),
        name: Yup.string().required('Обязательное поле!'),
        username: Yup.string().required('Обязательное поле!'),
        street: Yup.string().required('Обязательное поле!'),
        city: Yup.string().required('Обязательное поле!'),
        zipcode: Yup.string()
          .required('Обязательное поле!')
          .matches(/^\d+[-]?\d+$/i, {
            message:
              'Zipcode не соответствует формату 0-9("-" необязательно)0-9',
          }),
        phone: Yup.string().required('Обязательное поле!'),
        website: Yup.string()
          .required('Обязательное поле!')
          .matches(/^[a-z]+[.][a-z]+$/i, {
            message: 'Website не соответствует формату a-z.a-z',
          }),
      })}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values) => {
        /* eslint-disable */
        console.log(values);
        /* eslint-enable */
      }}
    >
      <Form className={cl.form}>
        <div className={cl.formHeader}>
          <h2 className={cl.pageTitle}>Профиль пользователя</h2>
          <MyButton
            type={EButtonTypes.BUTTON}
            onClick={editHandler}
            content={EButtonNames.EDIT}
            theme={EButtonThemes.primary}
            disabled={false}
          />
        </div>
        <div className={cl.inputsContainer}>
          <FormInput
            title={EInputNames.NAME}
            name={EInputNames.NAME.toLocaleLowerCase()}
            type={EInputTypes.TEXT}
            disabled={isInputDisabled}
          />
          <FormInput
            title={EInputNames.USERNAME}
            name={EInputNames.USERNAME.toLocaleLowerCase()}
            type={EInputTypes.TEXT}
            disabled={isInputDisabled}
          />
          <FormInput
            title={EInputNames.EMAIL}
            name={EInputNames.EMAIL.toLocaleLowerCase()}
            type={EInputTypes.TEXT}
            disabled={isInputDisabled}
          />
          <FormInput
            title={EInputNames.STREET}
            name={EInputNames.STREET.toLocaleLowerCase()}
            type={EInputTypes.TEXT}
            disabled={isInputDisabled}
          />
          <FormInput
            title={EInputNames.CITY}
            name={EInputNames.CITY.toLocaleLowerCase()}
            type={EInputTypes.TEXT}
            disabled={isInputDisabled}
          />
          <FormInput
            title={EInputNames.ZIPCODE}
            name={EInputNames.ZIPCODE.toLocaleLowerCase()}
            type={EInputTypes.TEXT}
            disabled={isInputDisabled}
          />
          <FormInput
            title={EInputNames.PHONE}
            name={EInputNames.PHONE.toLocaleLowerCase()}
            type={EInputTypes.TEXT}
            disabled={isInputDisabled}
          />
          <FormInput
            title={EInputNames.WEBSITE}
            name={EInputNames.WEBSITE.toLocaleLowerCase()}
            type={EInputTypes.TEXT}
            disabled={isInputDisabled}
          />
          <FormInput
            title={EInputNames.COMMENT}
            name={EInputNames.COMMENT.toLocaleLowerCase()}
            type={EInputTypes.TEXTAREA}
            disabled={isInputDisabled}
          />
        </div>
        <MyButton
          content={EButtonNames.SEND}
          type={EButtonTypes.SUBMIT}
          theme={EButtonThemes.green}
          disabled={isSubmitDisabled}
        />
      </Form>
    </Formik>
  );
};

export default UserForm;
