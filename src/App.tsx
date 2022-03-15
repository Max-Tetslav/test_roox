import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/home/HomePage';
import UserProfilePage from './pages/userProfile/UserProfilePage';
import UsersPage from './pages/users/UsersPage';
import { store } from './store/store';

function App(): JSX.Element {
  return (
    <BrowserRouter basename="/test_roox">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<UsersPage />} />
            <Route path="userProfile" element={<UserProfilePage />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
