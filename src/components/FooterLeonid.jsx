import React from 'react';

export default function FooterLeonid() {
  return (
    <footer>
      <div>
        <div>
          <ul style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
          }}
          >
            <li className="m-2">
              Москва ул. Орджоникидзе, 11с10
              <br />
              +7 (777) 777-77-77
            </li>
            <li className="m-2">
              Санкт-Петербург ул. Кирочная, 19
              <br />
              +7 (111) 111-11-11
            </li>
            <li className="m-2">
              <div className="socials" style={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}>
                <div style={{ width: '20px', height: '20px' }}>
                  <a href="/#"><img style={{ width: '20px', height: '20px' }} src="/Img/telegram.png" alt="telegram" /></a>
                </div>
                <div style={{ width: '20px', height: '20px' }}>
                  <a href="/#"><img style={{ width: '20px', height: '20px' }} src="/Img/instagram.png" alt="instagram" /></a>
                  {' '}
                </div>
                <div style={{ width: '20px', height: '20px' }}>
                  <a href="/#"><img style={{ width: '20px', height: '20px' }} src="/Img/vk.png" alt="instagram" /></a>
                  {' '}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
