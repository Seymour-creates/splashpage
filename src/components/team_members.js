// import { useEffect } from 'react';
// // const { Octokit } = require("@octokit/core");
// //import { Octokit } from "@octokit/core";
// const fetch = require('node-fetch');

// const getUser = async () => {
//   const users = ['seymour-creates', 'odylic','kerriannercrawford','n8innate','SteeleCoale'];
//   const info = []
//   await users.forEach(async user => {
//     await fetch(`https://api.github.com/users/${user}`)
//     .then(async resp => await resp.json())
//     .then (async res => {console.log(res); return await info.push(res)})
//   })
//   //console.log((info));
//   return  await (info);

// }

// console.log(getUser());

// // const TeamMembers =()=> {

// //   return (
// //     <div className="main-team-div">

// //     </div>
// //   )
// // }

// export default TeamMembers

import styled from 'styled-components';
import React from 'react';

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
