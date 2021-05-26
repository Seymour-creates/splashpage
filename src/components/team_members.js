// import styled from 'styled-components';
// import React from 'react';

// const getUser = async  () => {
//   const users = ['seymour-creates', 'odylic','kerriannercrawford','n8innate','SteeleCoale'];
//   const info = {}
//   users.forEach( user => {
//     fetch(`https://api.github.com/users/${user}`)
//     .then( resp => resp.json() )
//     .then( res => info[user] = res )
//   })
//   //console.log((info));
//   return await info;
  
// }

// console.log(getUser());

import React from 'react';
import TeamMemberComponent from './TeamMemberComponent';

export default function team_members() {
  return (
    <div>
      Team Members Header
      <div className="TeamMembersDiv">
          <TeamMemberComponent test={1} />
          <TeamMemberComponent test={2} />
          <TeamMemberComponent test={3} />
          <TeamMemberComponent test={4} />
      </div>
    </div>
  );
}



