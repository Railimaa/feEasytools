/* eslint-disable no-nested-ternary */
import styled, { css, keyframes } from 'styled-components';

const animation = keyframes`
  from { transform: translateX(30%); opacity: 0;  }
  to { transform: translateX(0); opacity: 1; }
`;

export const Container = styled.div<{ $visible: boolean }>`
  position: relative;

  button {
    position: absolute;
    top: 18px;
    left: 13px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    transition: all ease-in-out 0.3s;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 999px;
      transform: scale(1.8);
      transition: transform ease-in 0.3s;
    }
  }
`;

export const Input = styled.input<{
  $visible: boolean;
  theme: 'dark' | 'light';
}>`
  width: ${({ $visible }) => ($visible ? '100%' : '0%')};
  height: 52px;
  padding-left: 35px;
  padding-right: 35px;
  background: none;
  border: ${({ $visible, theme }) =>
    $visible && theme === 'dark'
      ? '1px solid rgba(255, 255, 255, 0.1)'
      : $visible && theme === 'light'
      ? '1px solid rgba(0, 0, 0, 0.1)'
      : 'none'};
  outline: none;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  font-weight: 500;
  border-radius: 16px;

  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${animation} 0.3s forwards;
    `}
`;
