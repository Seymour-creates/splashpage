import React from 'react'


export default function TeamMemberComponent({name, test, image, github, linkedin}) {
  return (
    <div className="TeamMemberComponentDiv">
      <img className="profileImage" src={image} alt={`image${test}`}></img>
      <br></br>
      <h2>{name}</h2>
      <a href={github}>Github</a>
      <br></br>
      <a href={linkedin}>Linkedin</a>
    </div>
  );
}




