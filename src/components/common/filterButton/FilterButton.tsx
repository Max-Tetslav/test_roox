import React, { useEffect, useState } from 'react';
import EButtonThemes from '../../../types/EButtonThemes';
import EButtonTypes from '../../../types/EButtonTypes';
import cl from './FilterButton.module.scss';

interface IProps {
  clickHandler: () => void;
  inputText: string;
  theme: EButtonThemes;
  type: EButtonTypes;
  isActive: boolean;
}

function FilterButton({ clickHandler, inputText, theme, type, isActive }: IProps) {
  const [classes, setClasses] = useState(
    theme === EButtonThemes.primary ? [cl.button, cl.primaryTheme] : [cl.button, cl.greenTheme],
  );

  useEffect(() => {
    if (isActive) {
      setClasses([...classes, cl.active]);
    } else {
      setClasses(classes.filter((item) => item !== cl.active));
    }
  }, [isActive]);

  return (
    <button className={classes.join(' ')} onClick={clickHandler} type={type}>
      {inputText}
    </button>
  );
}

export default FilterButton;
