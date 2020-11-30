import React from 'react';

import toroLogo from '../../assets/images/logo-toro.svg';
import { HeaderContainer, Logo } from './style';

const Header = () => (
    <HeaderContainer>
      <Logo src={toroLogo} alt="Toro Investimentos Logo"/>
    </HeaderContainer>
);

export default Header;
