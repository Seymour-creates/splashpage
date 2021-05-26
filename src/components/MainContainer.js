import React from 'react';
import {NavBar} from './navbar';
import AboutReactron from './AboutReactron';
import Logo from './Logo';
import TeamMembers from './team_members';
import GifDisplay from './gif_display';

export default function MainContainer() {
  return (
<<<<<<< HEAD
    <Wrapper id="main-container-div">
      <MainContainerDiv>
=======
    <div className="Wrapper">
      <div className="MainContainerDiv">
>>>>>>> 723d4e7b8432a34abe9f8cd12985d33e800d184b
        <div className="App">
          <header className="header">
            <NavBar />
          </header>
            <Logo />
          <main>
            <AboutReactron />
          </main>
            <GifDisplay />
            {/* <footer className="footer"><TeamMembers /></footer> */}
            <TeamMembers />
        </div>
      </div>
    </div>
  );
}
