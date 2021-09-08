import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export default function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [err, setError] = useState('');
  const submitHandler = e => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const { email, password, name } = formData;

    if (!(email && password && name)) {
      setError('Заполните все поля');
      return handleShow();
    }
    axios
      .post('/user/signup', formData)
      .then(res => {
        if (res.status === 200) window.location = '/';
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 403) {
          setError('Пользователь с таким email уже зарегистрирован');
        }
        handleShow();
      });
  };
  return (
    <>
      <form
        className="row"
        style={{ width: '600px', marginLeft: '600px', marginTop: '120px' }}
        onSubmit={submitHandler}
      >
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ОШИБКА</Modal.Title>
        </Modal.Header>
        <Modal.Body>{err}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <a href="/user/signin">
            <Button variant="primary" onClick={handleClose}>
              Войти
            </Button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}
