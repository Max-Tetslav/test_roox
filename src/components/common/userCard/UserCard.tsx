import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from 'models/storeTypes';
import UserInfoItem from 'components/common/userInfoItem/UserInfoItem';
import cl from './UserCard.module.scss';

interface IUserCardProps {
  user: IUser;
}

const UserCard: React.FC<IUserCardProps> = ({ user }) => {
  const moreHandler = useCallback(() => {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }, [user]);

  return (
    <div className={cl.card}>
      <UserInfoItem title="ФИО: " content={user.name} />
      <UserInfoItem title="Город: " content={user.address.city} />
      <UserInfoItem title="Компания: " content={user.company.name} />
      <Link className={cl.link} to={`user/:${user.id}`} onClick={moreHandler}>
        Подробнее
      </Link>
    </div>
  );
};

export default UserCard;
