import React from 'react';

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
        <li>
          <a href={link.url}>{link.texto}</a>
        </li>
      )) }
    </MenuWrapper.CentralSide>

    <MenuWrapper.RightSide>
      <button>
        Entrar
      </button>
      <button>
        Cadastrar
      </button>
    </MenuWrapper.RightSide>
  </MenuWrapper>
);

export default Menu;