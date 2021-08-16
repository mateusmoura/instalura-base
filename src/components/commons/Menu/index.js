import React from 'react';

import Button from '../Buttons';
import Text from '../../foundation/Text';

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
      {links.map((link) => (
        <li key={link.url}>
          <Text tag="a" variant="smallestException" href={link.url}>{link.texto}</Text>
        </li>
      ))}
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
