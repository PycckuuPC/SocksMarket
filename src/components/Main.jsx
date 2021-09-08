import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import Footer from './Footer';

export default function Main() {
  const styles = {
    backgroundColor: 'white',
    padding: '20px',
    textAlign: 'center',
    marginTop: '100',
    minHeight: '100vh',
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

  const socksCont = {
    marginTop: '40px',
    display: 'flex',
    flexWrap: 'wrap',
    paddingRight: '10px',
    justifyContent: 'space-evenly',
  };

  return (
    <>
      <div style={styles}>
        <h1>Самое время быть уникальным!</h1>
        <a href="/sockscreate"><Button variant="primary" style={btnStyles} type="submit">Смоделируй свою любимую пару носков!</Button></a>
        <div style={socksCont}>
          <div>
            <img src="./Img/socks/s1.png" alt="sock1" className="sockHov" />
          </div>
          <div>
            <img src="./Img/socks/s2.png" alt="sock2" className="sockHov" />
          </div>
          <div>
            <img src="./Img/socks/s3.png" alt="sock3" className="sockHov" />
          </div>
          <div>
            <img src="./Img/socks/s4.png" alt="sock4" className="sockHov" />
          </div>
          <div>
            <img src="./Img/socks/s5.png" alt="sock5" className="sockHov" />
          </div>
          <div>
            <img src="./Img/socks/s6.png" alt="sock6" className="sockHov" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
