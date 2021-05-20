import React from 'react';
import logo from '../logo.svg';
import style from 'styled-components';

export default function Logo() {
  return (
    <LogoStyledDiv>
      <main className="main">
        <div className="Reactron-logo">
          <div className="R-back">
            <img src={logo} className="App-logo r-logo-back" alt="logo" />
            <img src={logo} className="App-logo r-logo-back" alt="logo" />
            <img src={logo} className="App-logo r-logo-back" alt="logo" />
            <img src={logo} className="App-logo r-logo-back" alt="logo" />
          </div>
          <div className="R-front">
            <div className="R-top-right">
              <img
                src={logo}
                className="App-logo r-logo-top-right"
                alt="logo"
              />
            </div>
            <div className="R-bottom-right br-1">
              <img
                src={logo}
                className="App-logo r-logo-bottom-right"
                alt="logo"
              />
              <img
                src={logo}
                className="App-logo r-logo-bottom-right"
                alt="logo"
              />
              <img
                src={logo}
                className="App-logo r-logo-bottom-right"
                alt="logo"
              />
            </div>
          </div>
          <div className="eactron">EACTRON</div>
        </div>
      </main>
    </LogoStyledDiv>
  );
}

export const LogoStyledDiv = style.div`
  border: 2px solid red;
`;
