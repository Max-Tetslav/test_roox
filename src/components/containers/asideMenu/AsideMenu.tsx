import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/store';
import { updateFilter } from 'store/reducers/filtersReducer';
import {
  EFilters,
  EButtonNames,
  EButtonTypes,
  EButtonThemes,
} from 'models/buttonTypes';
import MyButton from 'components/common/myButton/MyButton';
import cl from './AsideMenu.module.scss';

const AsideMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const filter = useAppSelector((state) => state.filter.current);
  const [isCityActive, setIsCityActive] = useState(false);
  const [isNameActive, setIsNameActive] = useState(false);

  const isProfilePage = location.pathname.includes('user');

  const cityClickHandler = useCallback(() => {
    if (isNameActive) {
      setIsNameActive(!isNameActive);
    }
    if (filter !== EFilters.city) {
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
    if (filter !== EFilters.name) {
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
        <MyButton
          content={EButtonNames.BY_NAME}
          isActive={isNameActive}
          type={EButtonTypes.BUTTON}
          theme={EButtonThemes.primary}
          onClick={nameClickHandler}
          disabled={isProfilePage}
        />
        <MyButton
          content={EButtonNames.BY_CITY}
          isActive={isCityActive}
          type={EButtonTypes.BUTTON}
          theme={EButtonThemes.primary}
          onClick={cityClickHandler}
          disabled={isProfilePage}
        />
      </form>
    </aside>
  );
};

export default AsideMenu;
