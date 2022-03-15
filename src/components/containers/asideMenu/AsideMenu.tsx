import React, { useCallback, useState } from 'react';
import { updateFilter } from '../../../store/reducers/filtersReducer';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import EButtonThemes from '../../../types/EButtonThemes';
import EButtonTypes from '../../../types/EButtonTypes';
import EFilters from '../../../types/EFilters';
import Button from '../../common/filterButton/FilterButton';
import cl from './AsideMenu.module.scss';

function AsideMenu() {
  const [isCityActive, setIsCityActive] = useState(false);
  const [isNameActive, setIsNameActive] = useState(false);
  const filterState = useAppSelector((state) => state.filters.current);
  const dispatch = useAppDispatch();

  const cityClickHandler = useCallback(() => {
    if (isNameActive) {
      setIsNameActive(!isNameActive);
    }
    if (filterState !== EFilters.city) {
      dispatch(updateFilter(EFilters.city));
    } else {
      dispatch(updateFilter(null));
    }
    setIsCityActive(!isCityActive);
  }, [isCityActive, isNameActive]);

  const nameClickHandler = useCallback(() => {
    if (isCityActive) {
      setIsCityActive(!isCityActive);
    }
    if (filterState !== EFilters.name) {
      dispatch(updateFilter(EFilters.name));
    } else {
      dispatch(updateFilter(null));
    }
    setIsNameActive(!isNameActive);
  }, [isNameActive, isCityActive]);

  return (
    <aside className={cl.aside}>
      <form className={cl.form}>
        <h3>Сортировка</h3>
        <Button
          inputText="По имени"
          isActive={isNameActive}
          type={EButtonTypes.button}
          theme={EButtonThemes.primary}
          clickHandler={nameClickHandler}
        />
        <Button
          inputText="По городу"
          isActive={isCityActive}
          type={EButtonTypes.button}
          theme={EButtonThemes.primary}
          clickHandler={cityClickHandler}
        />
      </form>
    </aside>
  );
}

export default AsideMenu;
