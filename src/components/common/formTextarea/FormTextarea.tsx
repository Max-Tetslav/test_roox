import React from 'react';
import cl from './FormTextarea.module.scss';

interface IProps {
  title: string;
  isDisabled: boolean;
  refLink: React.MutableRefObject<HTMLTextAreaElement | null>;
}

function FormTextarea({ title, isDisabled, refLink }: IProps): JSX.Element {
  return (
    <label htmlFor={`${title}-input`} className={cl.label}>
      {title}
      <textarea
        id={`${title}-input`}
        name={title.toLocaleLowerCase()}
        className={cl.textarea}
        disabled={isDisabled}
        ref={refLink}
      />
    </label>
  );
}

export default FormTextarea;
