import React from 'react';
import { Outlet } from 'react-router-dom';

import AsideMenu from '../../components/containers/asideMenu/AsideMenu';
import MainHeader from '../../components/containers/mainHeader/MainHeader';

function HomePage() {
  return (
    <>
      <MainHeader />
      <AsideMenu />
      <Outlet />
    </>
  );
}

export default HomePage;
