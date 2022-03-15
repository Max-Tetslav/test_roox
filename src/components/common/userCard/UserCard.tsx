import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { updateCurrentUser } from '../../../store/reducers/userReducer';
import { useAppDispatch } from '../../../store/store';
import { IUser } from '../../../types/IUser';
import UserInfoItem from '../userInfoItem/UserInfoItem';
import cl from './UserCard.module.scss';

interface IProps {
  user: IUser;
}

function UserCard({ user }: IProps) {
  const dispatch = useAppDispatch();

  const moreHandler = useCallback(() => {
    dispatch(updateCurrentUser(user));
    localStorage.setItem('currentUser', JSON.stringify(user));
  }, []);

  return (
    <div className={cl.card}>
      <UserInfoItem title="ФИО: " content={user.name} />
      <UserInfoItem title="Город: " content={user.address.city} />
      <UserInfoItem title="Компания: " content={user.company.name} />
      <Link className={cl.link} to="userProfile" onClick={moreHandler}>
        Подробнее
      </Link>
    </div>
  );
}

export default UserCard;
