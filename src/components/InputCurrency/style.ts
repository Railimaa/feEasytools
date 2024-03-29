import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  input {
    width: 100%;
    font-size: 32px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    border: none;
    outline: none;
    font-weight: bold;
    background: transparent;
  }
`;
