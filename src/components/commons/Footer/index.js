/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FooterWrapper from './styles';

const Footer = (props) => (
  <FooterWrapper {...props}>
    <a href="https://www.alura.com.br/">
      <img src="https://www.alura.com.br/assets/img/alura-logo.svg" alt="Logo Alura" />
    </a>
    <p>
      Orgulhosamente criado durante
      {' '}
      o
      {' '}
      <a href="https://www.alura.com.br/">
        <span>Bootcamp Alura JAM Stack</span>
      </a>
    </p>
  </FooterWrapper>
);

export default Footer;
