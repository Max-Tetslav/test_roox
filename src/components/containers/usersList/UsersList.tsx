import React from 'react';
import { IUser } from '../../../types/IUser';
import UserCard from '../../common/userCard/UserCard';
import cl from './UsersList.module.scss';

interface IProps {
  users: IUser[];
}

function UsersList({ users }: IProps) {
  return (
    <div className={cl.container}>
      {users.map((userItem) => (
        <UserCard key={userItem.id} user={userItem} />
      ))}
    </div>
  );
}

export default UsersList;
