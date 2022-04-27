import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import NotFound from 'pages/notFound/NotFound';
import HomePage from 'pages/homePage/HomePage';
import UserProfilePage from 'pages/userProfile/UserProfilePage';
import UsersPage from 'pages/usersPage/UsersPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<UsersPage />} />
            <Route path="user/:userId" element={<UserProfilePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </HashRouter>
  );
};

export default App;
