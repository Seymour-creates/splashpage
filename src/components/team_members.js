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

import React from 'react';
import TeamMemberComponent from './TeamMemberComponent';
import Kerripfp from '../assets/Kerripfp.png';
import Jimmypfp from '../assets/Jimmypfp.jpeg';
import Loganpfp from '../assets/Loganpfp.jpeg';
import Natepfp from '../assets/Natepfp.jpg';
import Romelopfp from '../assets/Romelopfp.jpeg';

export default function team_members() {
  return (
    <div className="TeamMembersWrapper">
      <h2>Team Members Header</h2>
      <div className="TeamMembersDiv">
        <TeamMemberComponent
          test={1}
          image={Kerripfp}
          linkedin={'https://linkedin.com/in/kerriannercrawford'}
          github={'https://github.com/kerriannercrawford'}
        />
        <TeamMemberComponent
          test={2}
          image={Jimmypfp}
          linkedin={'https://www.linkedin.com/in/jimmylindpt/'}
          github={'https://github.com/odylic'}
        />
        <TeamMemberComponent
          test={3}
          image={Loganpfp}
          linkedin={''}
          github={'https://github.com/SteeleCoale'}
        />
        <TeamMemberComponent
          test={4}
          image={Natepfp}
          linkedin={''}
          github={'https://github.com/n8innate'}
        />
        <TeamMemberComponent
          test={5}
          image={Romelopfp}
          linkedin={''}
          github={'https://github.com/Seymour-creates'}
        />
      </div>
    </div>
  );
}
