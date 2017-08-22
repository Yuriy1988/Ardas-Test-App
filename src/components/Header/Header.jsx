import React from 'react';
import './header.less';
import logo from '../../assets/images/logo.png';

// лучше не юзать require прям в компоненте
// не используй классы, там где они не нужны, можно просто функцию в этом случае

const Header = () => {
  return (
    <header className="header">
      <img src={logo} />
    </header>
  );
}

export default Header;

