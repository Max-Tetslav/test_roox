import React from 'react';
import cl from './Loading.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={cl.container}>
      <h1 className={cl.text}>Загрузка</h1>
      <div className={cl.loadingContainer} />
    </div>
  );
};

export default Loading;
