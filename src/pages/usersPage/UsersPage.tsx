import React from 'react';
import { useAppSelector } from 'store/store';
import UsersList from 'components/containers/usersList/UsersList';
import cl from './UsersPage.module.scss';

const UsersPage: React.FC = () => {
  const users = useAppSelector((state) => state.user.list);

  return (
    <main className={cl.container}>
      <UsersList />
      <p className={cl.usersTotal}>Найдено {users.length} пользователей</p>
    </main>
  );
};

export default UsersPage;
