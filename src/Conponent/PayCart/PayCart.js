import React from 'react';
import styled from 'styled-components';

export const Mainstyled = styled.div`
  width: 80%;
  border: 1px solid black;
  height: 500px;
  margin: 0 auto;
`;

export const Image = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid red;
`;

export const Conperfum = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  display: flex;
`;

export default function PayCart() {
  return (
    <Mainstyled>
      <Conperfum>
        <Image />
        <h1>Title</h1>
        <p>price</p>
      </Conperfum>
    </Mainstyled>
  );
}
