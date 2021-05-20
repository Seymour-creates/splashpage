import React from 'react';
import {NavBar} from './navbar';
import AboutReactron from './AboutReactron';
import Logo from './Logo';
import TeamMembers from './team_members';
import GifDisplay from './gif_display';
import styled from 'styled-components';

export default function MainContainer() {
  return (
    <Wrapper>
      <MainContainerDiv>
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
      </MainContainerDiv>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

`;

export const MainContainerDiv = styled.div`
  max-width: 850px;
  text-align: center;
`;
