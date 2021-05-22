
import style from 'styled-components'
import React from 'react'

export default function AboutReactron() {
  return (
    <AboutReactronStyled className="AboutReactron">
      About Reaction
    </AboutReactronStyled>
  )
}


export const AboutReactronStyled = style.div`
  border: 1px solid blue;
  height: 200px;
`;