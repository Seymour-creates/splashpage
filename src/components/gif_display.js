import React from 'react';
import style from 'styled-components';

export default function gif_display() {
  return <GifDisplayDiv>Gif Display Div</GifDisplayDiv>;
}

export const GifDisplayDiv = style.div`
  border: 1px solid red;
  height: 200px;
`;
