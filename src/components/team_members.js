// import styled from 'styled-components';
// import React from 'react';
//import fetch from "node-fetch";
const fetch = require('node-fetch');

const getUser = async () => {
  const users = ['seymour-creates', 'odylic','kerriannercrawford','n8innate','SteeleCoale'];
  const info = {}
  const user = []
  for (let i = 0; i < users.length; i += 1) {
    user.push( fetch(`https://api.github.com/users/${users[i]}`,{ auth : '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' }))
    
  }
  Promise.all(user).then(resp => resp.forEach(resp => console.log(resp.json())))
  
  
  //console.log(info);
  //return info;
  
}

getUser();


// export default function team_members() {
//   return (
//     <div className="TeamMembersDiv">
//       <TeamMembersDiv>Team Members Div</TeamMembersDiv>
//     </div>
//   );
// }

// export const TeamMembersDiv = styled.div`
//   border: 1px solid black;
//   height: 200px;
// `;
