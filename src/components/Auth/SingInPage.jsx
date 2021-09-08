/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

// Компонент с формой входа в учётную запись
export default function SignIn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [err, setError] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    axios
      .post('/user/signin', data)
      .then(res => {
        if (res.status === 200) window.location = '/';
        else setError(res.data.message);
      })
      .catch(error => {
        error.response.status === 400
          ? setError('Заполните все поля')
          : setError('Не правильный логин или пароль');
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
            <Button variant="primary" type="submit" className="form-group mt-3">
              Войти
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
        </Modal.Footer>
      </Modal>
    </>
  );
}
