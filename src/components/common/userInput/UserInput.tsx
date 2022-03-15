import React, { useCallback, useState } from 'react';
import cl from './UserInput.module.scss';

interface IProps {
  title: string;
  content: string;
  isDisabled: boolean;
  refLink: React.MutableRefObject<HTMLInputElement | null>;
}

function UserInput({ title, content, isDisabled, refLink }: IProps): JSX.Element {
  const [value, setValue] = useState<string>();

  const inputHandler = useCallback(
    (event) => {
      setValue(event.target.value);
      if (event.target.value === '') {
        event.target.style.border = '1px solid red';
      } else {
        event.target.style.border = '';
      }
    },
    [value],
  );

  return (
    <label htmlFor={`${title}-input`} className={cl.label}>
      {title}
      <input
        className={cl.input}
        type="text"
        id={`${title}-input`}
        onChange={inputHandler}
        name={title.toLocaleLowerCase()}
        placeholder={content}
        disabled={isDisabled}
        ref={refLink}
      />
    </label>
  );
}

export default UserInput;
