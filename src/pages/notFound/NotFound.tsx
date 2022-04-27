import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../../public/404.gif';
import cl from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <main className={cl.container}>
      <h1>Нет такой страницы</h1>
      <Link className={cl.link} to="/">
        На главную
      </Link>
      <img src={notFoundImg} alt="Page not found" />
    </main>
  );
};

export default NotFound;
