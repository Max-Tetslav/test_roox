import React, { useEffect, useState } from 'react';
import getUsersList from '../../api/getUsersList';
import Loading from '../../components/common/loading/Loading';
import UsersList from '../../components/containers/usersList/UsersList';
import useFetching from '../../hooks/useFetching';
import { useAppSelector } from '../../store/store';
import EFilters from '../../types/EFilters';
import { IUser } from '../../types/IUser';
import cl from './UsersPage.module.scss';

function UsersPage() {
  const [sortedUsers, setSortedUsers] = useState([] as IUser[]);
  const filter = useAppSelector((state) => state.filters.current);

  const [fetchUsers, isLoading] = useFetching(async () => {
    const usersResponse = await getUsersList();

    switch (filter) {
      case EFilters.name:
        setSortedUsers(usersResponse.sort((userA, userB) => userA.name.localeCompare(userB.name)));
        break;
      case EFilters.city:
        setSortedUsers(usersResponse.sort((userA, userB) => userA.address.city.localeCompare(userB.address.city)));
        break;
      default:
        setSortedUsers(usersResponse);
        break;
    }
  });

  useEffect(() => {
    fetchUsers();
  }, [filter]);

  return (
    <main className={cl.container}>
      <h2>Список Пользователей</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <UsersList users={sortedUsers} />
          <p className={cl.usersTotal}>Найдено {sortedUsers.length} пользователей</p>
        </>
      )}
    </main>
  );
}

export default UsersPage;
