import React from 'react';

export default function Footer() {
  const glav = {
    marginTop: '10px',
    marginLeft: '30px',
    fontSize: '18px',
  };

  const divStyle = {
    backgroundColor: '#FFEFD5',
    minWidht: '100vh',
    display: 'flex',
    textAlign: 'center',
    height: '100px',
    padding: '0',
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-beige"
      style={divStyle}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={glav}>
              <img className="icons" src="/Img/mail.png" alt="map" />{' '}
              info@enjoysocks.ru
            </li>
            <li className="nav-item" style={glav}>
              <img className="icons" src="/Img/map.png" alt="map" /> г. Москва,
              Шоссе Энтузиастов 12 ст2
            </li>
            <li className="nav-item" style={glav}>
              <img className="icons" src="/Img/phone.png" alt="map" /> +7 999
              666 36 36
            </li>
            <li className="m-2">
              <div
                className="socials"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '20px',
                  marginRight: '100px',
                }}
              >
                <div style={{ width: '20px', height: '20px' }}>
                  <a href="/#">
                    <img
                      style={{ width: '20px', height: '20px' }}
                      src="/Img/telegram.png"
                      alt="telegram"
                    />
                  </a>
                </div>
                <div style={{ width: '20px', height: '20px' }}>
                  <a href="/#">
                    <img
                      style={{ width: '20px', height: '20px' }}
                      src="/Img/instagram.png"
                      alt="instagram"
                    />
                  </a>{' '}
                </div>
                <div style={{ width: '20px', height: '20px' }}>
                  <a href="/#">
                    <img
                      style={{ width: '20px', height: '20px' }}
                      src="/Img/vk.png"
                      alt="instagram"
                    />
                  </a>{' '}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
