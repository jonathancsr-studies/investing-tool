import styled, { css } from 'styled-components';

import { theme } from '../../assets/styles/variables';

export const Container = styled.div`
  width: 100vw;
  margin-top: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  font-family: 'Roboto Slab', serif;
  color: ${theme['primary-color']};

  margin-left:80px;

  @media (max-width: 340px) {
    font-size: 24px;
  }
`;

export const Order = styled.div`
  display: flex;
  color: ${theme.texts};

  justify-content: center;
  align-items: center;

  margin-right:80px;

`;

export const Button = styled.button`
  width: 122px;
  border-color: transparent;
  border-radius: 100px;
  padding: 10px;
  margin: 0 10px;

  background-color: ${theme['button-grey']};
  color: ${theme.texts};
  font-size: 14px;

  ${(props) => props.selected
    && css`
      color: ${theme['button-grey']};
      background-color: ${theme['button-blue']};
    `}
`;
