import React, { FormEvent, useCallback, useRef, useState } from 'react';
import { useAppSelector } from '../../../store/store';
import EButtonThemes from '../../../types/EButtonThemes';
import EButtonTypes from '../../../types/EButtonTypes';
import { IUser } from '../../../types/IUser';
import FormButton from '../../common/formButton/FormButton';
import FormTextarea from '../../common/formTextarea/FormTextarea';
import UserInput from '../../common/userInput/UserInput';
import cl from './UserForm.module.scss';

function UserForm() {
  const [isEditDisabled] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const nameInput: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const usernameInput: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const emailInput: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const streetInput: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const cityInput: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const codeInput: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const phoneInput: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const websiteInput: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const commentInput: React.MutableRefObject<HTMLTextAreaElement | null> = useRef(null);
  const user = useAppSelector((state) => state.user.current);

  const editHandler = useCallback(() => {
    setIsInputDisabled(!isInputDisabled);
    setIsSubmitDisabled(!isSubmitDisabled);
  }, [isInputDisabled]);

  const validateForm = () => {
    const validList = [];

    if (nameInput.current?.value === '') {
      validList.push(nameInput.current);
    }
    if (usernameInput.current?.value === '') {
      validList.push(usernameInput.current);
    }
    if (emailInput.current?.value === '') {
      validList.push(emailInput.current);
    }
    if (streetInput.current?.value === '') {
      validList.push(streetInput.current);
    }
    if (cityInput.current?.value === '') {
      validList.push(cityInput.current);
    }
    if (codeInput.current?.value === '') {
      validList.push(codeInput.current);
    }
    if (phoneInput.current?.value === '') {
      validList.push(phoneInput.current);
    }
    if (websiteInput.current?.value === '') {
      validList.push(websiteInput.current);
    }

    return validList;
  };

  const submitHandler = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const data = new FormData(event.target as HTMLFormElement);
      const result = Object.fromEntries(data.entries());
      const validList = validateForm();

      if (validList.length === 0) {
        setIsSubmitDisabled(!isSubmitDisabled);
        setIsInputDisabled(!isInputDisabled);
        console.log(result);
      } else {
        validList.forEach((item) => {
          item.style.border = '1px solid red';
        });
      }
    },
    [isInputDisabled, isSubmitDisabled],
  );

  return (
    <form className={cl.form} onSubmit={submitHandler}>
      <div className={cl.formHeader}>
        <h2 className={cl.pageTitle}>Профиль пользователя</h2>
        <FormButton
          clickHandler={editHandler}
          content="Редактировать"
          type={EButtonTypes.button}
          theme={EButtonThemes.primary}
          isDisabled={isEditDisabled}
        />
      </div>
      <div className={cl.inputsContainer}>
        <UserInput title="Name" content={(user as IUser).name} isDisabled={isInputDisabled} refLink={nameInput} />
        <UserInput title="Username" content={(user as IUser).username} isDisabled={isInputDisabled} refLink={usernameInput} />
        <UserInput title="Email" content={(user as IUser).email} isDisabled={isInputDisabled} refLink={emailInput} />
        <UserInput title="Street" content={(user as IUser).address.street} isDisabled={isInputDisabled} refLink={streetInput} />
        <UserInput title="City" content={(user as IUser).address.city} isDisabled={isInputDisabled} refLink={cityInput} />
        <UserInput title="Zipcode" content={(user as IUser).address.zipcode} isDisabled={isInputDisabled} refLink={codeInput} />
        <UserInput title="Phone" content={(user as IUser).phone} isDisabled={isInputDisabled} refLink={phoneInput} />
        <UserInput title="Website" content={(user as IUser).website} isDisabled={isInputDisabled} refLink={websiteInput} />
        <FormTextarea title="Comment" isDisabled={isInputDisabled} refLink={commentInput} />
      </div>
      <div className={cl.formFooter}>
        <FormButton content="Отправить" type={EButtonTypes.submit} theme={EButtonThemes.green} isDisabled={isSubmitDisabled} />
      </div>
    </form>
  );
}

export default UserForm;
