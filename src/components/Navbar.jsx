import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';

export default function Navbar({ currentUser, setCurrentUser }) {
  const btnStyles = {
    backgroundColor: 'turquoise',
    color: 'black',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '20px',
  };

  const navBarStyles = {
    backgroundColor: '#FFEFD5',

  };

  const navItems = {
    fontSize: '25px',
  };

  const glav = {
    marginTop: '10px',
    marginLeft: '30px',
  };

  const clickHandler = async () => {
    const res = await axios('/user/logout');
    if (res.status === 200) {
      setCurrentUser(null);
      window.location = '/';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-beige" style={navBarStyles}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={navItems}>
            <a href="/"><img className="logo" alt="Brand" src="/Img/logo.png" /></a>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={glav}>Главная</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/favourites" style={glav}>Избранное</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart" style={glav}>Корзина</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            {currentUser ? (
              <li className="nav-item">
                {' '}
                {' '}
                {currentUser.name}
                <img src="/Img/profile.png" alt="profile" style={{ height: '25px', marginRight: '25px', marginLeft: '25px'}} />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={clickHandler}
                >
                  Выход
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a href="/user/signup"><Button variant="primary" style={{ marginRight: '15px', fontSize: '22px' }}>Зарегистрироваться</Button></a>
                </li>
                <li className="nav-item">
                  <a href="/user/signin">
                    {' '}
                    <Button variant="primary" style={{ marginRight: '25px', fontSize: '22px' }}>Войти</Button>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
