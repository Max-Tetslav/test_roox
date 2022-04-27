import React from 'react';
import { Outlet } from 'react-router-dom';

import AsideMenu from 'components/containers/asideMenu/AsideMenu';

const HomePage: React.FC = () => {
  return (
    <>
      <AsideMenu />
      <Outlet />
    </>
  );
};

export default HomePage;
