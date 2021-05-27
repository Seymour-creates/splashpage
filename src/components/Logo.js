import React from 'react';
import logo from '../assets/logo.png';

console.log('logo')

export default function Logo() {
  return (
      <main className="main">
      <img id="logo" src={logo} alt={'Logo'} />
      </main>

  );
}
