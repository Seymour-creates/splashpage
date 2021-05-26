import React from 'react';
import logo from '../logo.svg';
import style from 'styled-components';

export default function Logo() {
  return (
    <LogoStyledDiv>
      <main className="main">
        
      </main>
    </LogoStyledDiv>
  );
}

export const LogoStyledDiv = style.div`
  border: 2px solid red;
`;
