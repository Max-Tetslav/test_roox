import React, { useEffect, useState } from 'react';
import usersApi from 'services/usersApi';
import { useAppDispatch, useAppSelector } from 'store/store';
import { updateUsersList } from 'store/reducers/userReducer';
import { IUser } from 'models/storeTypes';
import { EFilters } from 'models/buttonTypes';
import UserCard from 'components/common/userCard/UserCard';
import Loading from 'components/common/loading/Loading';
import cl from './UsersList.module.scss';

const UsersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter.current);
  const { data, isError, isLoading } = usersApi.useGetUsersListQuery(undefined);

  const [loader, setLoader] = useState(isLoading);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isLoading) {
      setTimeout(() => setLoader(false), 2000);
    }

    return () => clearTimeout(timer);
  }, [isLoading]);

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (data) {
      setUsers(data);
      dispatch(updateUsersList(data));
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      switch (filter) {
        case EFilters.name:
          setUsers((state) =>
            [...state].sort((userA, userB) =>
              userA.name.localeCompare(userB.name),
            ),
          );
          break;
        case EFilters.city:
          setUsers((state) =>
            [...state].sort((userA, userB) =>
              userA.address.city.localeCompare(userB.address.city),
            ),
          );
          break;
        default:
          setUsers(data);
      }
    }
  }, [filter]);

  if (isError) {
    return <div>Что-то пошло не так</div>;
  }

  if (loader) {
    return <Loading />;
  }

  return (
    <div className={cl.container}>
      {users.map((userItem) => (
        <UserCard key={userItem.id} user={userItem} />
      ))}
    </div>
  );
};

export default UsersList;
