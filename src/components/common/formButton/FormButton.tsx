import React, { useState } from 'react';
import EButtonThemes from '../../../types/EButtonThemes';
import EButtonTypes from '../../../types/EButtonTypes';
import cl from './FormButton.module.scss';

interface IProps {
  content: string;
  type: EButtonTypes;
  clickHandler?: () => void;
  theme: EButtonThemes;
  isDisabled: boolean;
}

function FormButton({ content, type, clickHandler, theme, isDisabled }: IProps): JSX.Element {
  const [classes] = useState(theme === EButtonThemes.primary ? [cl.button, cl.primaryTheme] : [cl.button, cl.greenTheme]);

  return (
    /* eslint-disable react/button-has-type */
    <button className={classes.join(' ')} type={type} onClick={clickHandler} disabled={isDisabled}>
      {content}
    </button>
    /* eslint-disable react/button-has-type */
  );
}

export default FormButton;
