import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import { FooterBase, LogoFooterImage } from './styles';
import LogoFooter from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <LogoFooterImage src={LogoFooter} alt="TivesFlix logo logo" />
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
