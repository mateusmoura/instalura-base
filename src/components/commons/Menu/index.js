import React from 'react';

import Button from '../Buttons';

import Logo from '../../../theme/Logo';

import MenuWrapper from './styles/MenuWrapper';

const links = [
  {
    url: '/',
    texto: 'Home',
  },
  {
    url: '/faq',
    texto: 'Perguntas frequentes',
  },
  {
    url: '/sobre',
    texto: 'Sobre',
  },
];

const Menu = () => (
  <MenuWrapper>
    <MenuWrapper.LeftSide>
      <Logo />
    </MenuWrapper.LeftSide>

    <MenuWrapper.CentralSide>
      { links.map(link => (
        <li key={link.url}>
          <a href={link.url}>{link.texto}</a>
        </li>
      )) }
    </MenuWrapper.CentralSide>

    <MenuWrapper.RightSide>
      <Button ghost variant="secondary.main">
        Entrar
      </Button>
      <Button variant="primary.main">
        Cadastrar
      </Button>
    </MenuWrapper.RightSide>
  </MenuWrapper>
);

export default Menu;