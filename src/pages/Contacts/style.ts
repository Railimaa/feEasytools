import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100vh;
  padding: 16px;
  padding-top: 100px;
  background: #111113;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 60px;
    padding-top: 100px;
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 768px) {
      flex-direction: row;
      min-height: 600px;
    }

    .left {
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }
    }

    .right {
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }
    }
  }
`;
