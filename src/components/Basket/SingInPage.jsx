import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

// Компонент с формой входа в учётную запись
export default function SignIn() {
  const submitHandler = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    axios.post('/user/signin', data).then(() => {
      window.location = '/cart';
    });
  };
  return (
    <form className="row" onSubmit={submitHandler}>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Электронный адрес
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Введите адрес"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Введите пароль"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group mt-3">
          <Button variant="primary" type="submit" className="form-group mt-3">
            Войти
          </Button>
        </div>
      </div>
    </form>
  );
}
