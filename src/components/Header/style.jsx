import styled from 'styled-components';
import { theme } from '../../assets/styles/variables';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 80px;
  background-color: ${theme['primary-color']};

  display: flex;
  justify-content: flex-start;

  @media (max-width: 340px) {
    height: 56px;
  }
`;

export const Logo = styled.img`
  width: 114px;
  margin-left: 80px;

  @media (max-width: 340px) {
    width: 93px;
    margin-left: 16px;
  }
`;
