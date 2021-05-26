import styled from 'styled-components';
import React from 'react';

const getUser = async  () => {
  const users = ['seymour-creates', 'odylic','kerriannercrawford','n8innate','SteeleCoale'];
  const info = {}
  users.forEach( user => {
    fetch(`https://api.github.com/users/${user}`)
    .then( resp => resp.json() )
    .then( res => info[user] = res )
  })
  //console.log((info));
  return await info;
  
}


console.log(getUser());

export default function team_members() {
  return (
    <div className="TeamMembersDiv">
      <TeamMembersDiv>Team Members Div</TeamMembersDiv>
    </div>
  );
}

export const TeamMembersDiv = styled.div`
  border: 1px solid black;
  height: 200px;
`;
