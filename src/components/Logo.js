import React from 'react';
// import logo from '../src/Reactron_Logo.png';
import style from 'styled-components';

export default function Logo() {
  return (
    <LogoStyledDiv>
      <main className="main">
      {/* <img src={logo} alt={'Logo'} /> */}
      </main>
    </LogoStyledDiv>
  );
}

export const LogoStyledDiv = style.div`
  border: 2px solid red;
`;
