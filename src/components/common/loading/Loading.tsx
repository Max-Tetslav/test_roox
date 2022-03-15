import React from 'react';
import cl from './Loading.module.scss';

function Loading(): JSX.Element {
  return (
    <div className={cl.wordsContainer}>
      <div className={cl.container}>
        <h1 className={cl.text}>Загрузка</h1>
        <div className={cl.loadingContainer} />
      </div>
    </div>
  );
}

export default Loading;
