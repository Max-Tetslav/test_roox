import React from 'react';
import UserForm from '../../components/containers/userForm/UserForm';
import cl from './UserProfilePage.module.scss';

function UserProfilePage() {
  return (
    <main className={cl.container}>
      <UserForm />
    </main>
  );
}

export default UserProfilePage;
