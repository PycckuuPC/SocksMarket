import React, { useEffect, useState } from 'react';
import {
  Card, Button, Modal, Row, Container,
} from 'react-bootstrap';

export default function Favorites() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [socks, setSocks] = useState([]);

  const styles = {
    backgroundColor: 'white',
    padding: '20px',
    textAlign: 'center',
    marginTop: '100',
  };

  const btnStyles = {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    width: '500px',
    height: '100px',
    marginTop: '50px',
    fontSize: '23px',

  };

  useEffect(() => {
    const sockData = localStorage.getItem('fav');
    if (sockData) {
      setSocks(JSON.parse(sockData));
    }
  }, []);

  const handleDeleteSock = (id) => {
    const updatedSocks = socks.filter((sock) => sock.id !== id);
    setSocks(updatedSocks);
    localStorage.setItem('fav', JSON.stringify(updatedSocks));
  };
  const handleAddToBasket = (id) => {
    const existingCart = localStorage.getItem('cart');
    const newCart = existingCart ? JSON.parse(existingCart) : [];
    const [sock] = socks.filter((el) => el.id === id);
    newCart.push(sock);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.location = '/cart';
  };
  return (
    <div>
      <div style={styles}>
        <h1>Избранные товары</h1>
        {socks.length === 0
      && (
      <>
        <br />
        <h3><i>Здесь пока ничего нет</i></h3>
        <a href="/sockscreate"><Button variant="primary" style={btnStyles} type="submit">Смоделируй свою любимую пару носков!</Button></a>
        <br />
        <h2 style={{ marginTop: '20px' }}>Самое время быть уникальным!</h2>
      </>
      )}
      </div>
      <Container>
        <Row md={4} style={{ display: 'flex', justifyContent: 'flex-start' }}>
          {socks?.map((sock) => (
            <Card key={sock.id} className="m-2">
              <Card.Img variant="top" />
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', backgroundColor: `${sock.color}` }} className="color" />
                <img style={{ position: 'absolute' }} className="pattern" src={`${sock.pattern}`} alt="" />
                <img style={{ position: 'absolute' }} className="pic" src={`${sock.image}`} alt="" />
                <img style={{ position: 'absolute' }} className="sock" src="/Img/sock.png" alt="" />
              </div>
              <div className="inFavorite">
                <Card.Body>
                  <Card.Title>Носки</Card.Title>
                  <Card.Text>990 рублей</Card.Text>
                  <Button className="m-2" variant="primary" onClick={() => handleAddToBasket(sock.id)}>Добавить в корзину</Button>
                  <Button className="m-2" variant="primary" style={{ marginLeft: '10px' }} onClick={handleShow}>Поделиться</Button>
                  <Button className="m-2" variant="primary" style={{ marginLeft: '10px' }} onClick={() => handleDeleteSock(sock.id)}>Удалить из избранного</Button>
                </Card.Body>
              </div>
            </Card>
          ))}
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Поделиться</Modal.Title>
        </Modal.Header>
        <div style={{ display: 'flex' }}>
          <Modal.Body><a href="https://mail.ru/" target="_blank" rel="noreferrer"><img src="/Img/icons/mail.png" width="50px" height="50px" alt="mail" /></a></Modal.Body>
          <Modal.Body><a href="https://www.google.com/intl/ru/gmail/about/" target="_blank" rel="noreferrer"><img src="/Img/icons/gmail.png" width="50px" height="50px" alt="mail" /></a></Modal.Body>
          <Modal.Body><a href="https://ok.ru/" target="_blank" rel="noreferrer"><img src="/Img/icons/odnoklass.png" width="50px" height="50px" alt="mail" /></a></Modal.Body>
          <Modal.Body><a href="https://vk.com/" target="_blank" rel="noreferrer"><img src="/Img/icons/vk.png" width="50px" height="50px" alt="mail" /></a></Modal.Body>
        </div>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
