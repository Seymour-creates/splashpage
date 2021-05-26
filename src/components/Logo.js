import React from 'react';
import logo from '../../src/Reactron_Logo.png';

console.log('logo')

export default function Logo() {
  return (
      <main className="main">
      <img src={logo} alt={'Logo'} />
      </main>

  );
}
