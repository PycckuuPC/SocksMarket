import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function SignUp() {
  const [err, setError] = useState('');
  const submitHandler = e => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const { email, password, name } = formData;

    if (!(email && password && name)) {
      return setError('Все поля должны быть заполнены');
    }
    axios
      .post('/user/signup', formData)
      .then(() => {
        window.location = '/cart';
      })
      .catch(error => {
        console.log(error);
        setError();
      });
  };
  return (
    <form className="row" onSubmit={submitHandler}>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Имя
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Введите имя"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Электронный адрес
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Введите адрес"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Введите пароль"
              id="exampleInputPassword1"
            />
          </label>
        </div>

        <div className="form-group mt-3">
          <Button variant="primary" type="submit" className="btn">
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </form>
  );
}
