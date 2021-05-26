import React from 'react'


export default function TeamMemberComponent({test, image, github, linkedin}) {
  return (
    <div className="TeamMemberComponentDiv">
        <image image={image}></image>
        image
        <br></br>
        {test}
        <br></br>
        {linkedin}linkedin
        <br></br>
        {github}github
    </div>
  )
}

