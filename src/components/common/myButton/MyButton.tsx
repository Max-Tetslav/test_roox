import React from 'react';
import classNames from 'classnames';
import { EButtonThemes, TButtonType } from 'models/buttonTypes';
import cl from './MyButton.module.scss';

interface IMyButtonProps {
  theme: EButtonThemes;
  content: string;
  isActive?: boolean;
  type: TButtonType;
  onClick?: () => void;
  disabled: boolean;
}

const MyButton: React.FC<IMyButtonProps> = ({
  content,
  isActive,
  theme,
  ...props
}) => {
  const classes = classNames(
    cl.button,
    { [cl.active]: isActive },
    { [cl.primaryTheme]: theme === EButtonThemes.primary },
    { [cl.greenTheme]: theme === EButtonThemes.green },
  );

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default MyButton;
