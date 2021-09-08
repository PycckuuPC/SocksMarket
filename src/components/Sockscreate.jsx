import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';

export default function Sockscreate() {
  const [sock, setSock] = useState({ color: '#FFFFFF', pattern: '', image: '' });

  const handleColorClick = (event) => {
    setSock((prev) => ({ ...prev, color: event.target.dataset.value }));
  };

  const handlePatternClick = (event) => {
    setSock((prev) => ({ ...prev, pattern: event.target.src }));
  };

  const handleImageClick = (event) => {
    setSock((prev) => ({ ...prev, image: event.target.src }));
  };

  const handleAddToFavorites = () => {
    const existingCart = localStorage.getItem('fav');
    const newCart = existingCart ? JSON.parse(existingCart) : [];
    const id = uuidv1();
    newCart.push({ id, ...sock });
    localStorage.setItem('fav', JSON.stringify(newCart));
    window.location = '/favourites';
  };

  const handleAddToBasket = () => {
    const existingCart = localStorage.getItem('cart');
    const newCart = existingCart ? JSON.parse(existingCart) : [];
    const id = uuidv1();
    newCart.push({ id, ...sock });
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.location = '/cart';
  };

  const colorCards = [
    { id: 1, value: 'White', image: '#FFFFFF' },
    { id: 2, value: 'Yellow', image: '#FFFF00' },
    { id: 3, value: 'Purple', image: '#800080' },
    { id: 4, value: 'Pink', image: '#FF1493' },
    { id: 5, value: 'Green', image: '#00FF7F' },
    { id: 6, value: 'Blue', image: '#00FFFF' },
  ];

  const patternCards = [
    { id: 1, value: 'Dots', image: '/Img/dots.png' },
    { id: 2, value: 'Figures', image: '/Img/figures.png' },
    { id: 3, value: 'Triangles', image: '/Img/tringles.png' },
    { id: 4, value: 'Stars', image: '/Img/stars.png' },
  ];

  const imageCards = [
    { id: 1, value: 'Image 1', image: '/Img/duck.png' },
    { id: 2, value: 'Image 2', image: '/Img/kaktus.png' },
    { id: 3, value: 'Image 3', image: '/Img/lama.png' },
    { id: 4, value: 'Image 4', image: '/Img/yodik.png' },
  ];

  const renderColorCards = () => colorCards.map((card) => (
    <div
      key={card.id}
      className="colorMini"
      onClick={handleColorClick}
      data-value={card.image}
      style={{ backgroundColor: `${card.image}` }}
    />
  ));

  const renderPatternCards = () => patternCards.map((card) => (
    <div
      key={card.id}
      onClick={handlePatternClick}
      data-value={card.image}
    >
      <img className="patternMini" src={card.image} alt={card.value} />
    </div>
  ));

  const renderImageCards = () => imageCards.map((card) => (
    <div
      key={card.id}
      onClick={handleImageClick}
      data-value={card.image}
    >
      <img className="picMini" src={card.image} alt={card.value} />
    </div>
  ));

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '50px',
    }}
    >
      <div style={{ justifyContent: 'center' }}>
        <h1>Твой дизайн:</h1>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', backgroundColor: `${sock.color}` }} className="color" />
          <img style={{ position: 'absolute' }} className="pattern" src={`${sock.pattern}`} alt="" />
          <img style={{ position: 'absolute' }} className="pic" src={`${sock.image}`} alt="" />
          <img style={{ position: 'absolute' }} className="sock" src="/Img/sock.png" alt="" />
        </div>
      </div>
      <div className="afterConstructor">
        <h2 className="config">Выбери цвет</h2>
        <div className="options">{renderColorCards()}</div>
      </div>
      <div>
        <h2 className="config">Выбери узор</h2>
        <div className="options" style={{backgroundColor: 'unset'}}>{renderPatternCards()}</div>
      </div>
      <div>
        <h2 className="config">Выбери изображение </h2>
        <div className="options" style={{backgroundColor: 'unset'}}>{renderImageCards()}</div>
      </div>
      <div className="but" style={{ display: 'flex' }}>
        <Button className="m-1" variant="primary" style={{ fontSize: '25px' }} onClick={handleAddToFavorites}>В избранное</Button>
        <Button className="m-1" variant="primary" style={{ fontSize: '25px' }} onClick={handleAddToBasket}>В корзину</Button>
      </div>
    </div>
  );
}
