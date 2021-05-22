// import { useEffect } from 'react';
// // const { Octokit } = require("@octokit/core");
// //import { Octokit } from "@octokit/core";
const fetch = require('node-fetch');

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


// const TeamMembers =()=> {
    
//   return (
//     <div className="main-team-div">
      
//     </div>
//   )
// }

// export default TeamMembers