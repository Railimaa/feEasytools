import styled from 'styled-components';

import backDark from '../../assets/images/backDark.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100vw;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 80px;
  padding-bottom: 32px;
  background-image: url(${backDark});
  background-size: cover;

  @media (min-width: 768px) {
    padding: 40px;
    padding-top: 90px;
  }

  /* .title {
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    height: 100vh;
    max-height: 50px;
    animation: 2s ease-in-out infinite;

    h1 {
      color: #fff;
      letter-spacing: -0.5px;
      box-shadow: 0px 2px 70px 4px #6741d9;
    }
  } */

  .categories {
    padding-bottom: 300px;
  }
`;
