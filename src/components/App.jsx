import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Favourites from './Favourites';
import SignInPage from './Auth/SingInPage';
import SignUpPage from './Auth/SingUpPage';
import Main from './Main';
import Cart from './Cart/Cart';
import Sockscreate from './Sockscreate';
import Share from './Share';

export default function App(user) {
  const [currentUser, setCurrentUser] = useState(user.user || null);
  return (
    <>

      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div style={{ maxWidth: '100%' }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user/signup" element={<SignUpPage />} />
          <Route path="/user/signin" element={<SignInPage />} />
          <Route path="/sockscreate" element={<Sockscreate />} />
          <Route path="/share" element={<Share />} />

        </Routes>
      </div>

    </>
  );
}
