import styled, { css } from 'styled-components';

import { TextStyleVariants } from '../../../foundation/Text';
import { breakpointMedia } from '../../../../theme/utils/breakpointMedia';

const MenuWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  align-items: center;
  padding-right: 28px;
  justify-content: space-between;
  font-family: 'Rubik', sans-serif;

  ${breakpointMedia({
    md: css`
      width: 100%;
      padding: 0 16px;
      margin-top: 32px;
      max-width: 768px;
      margin-left: auto;
      margin-right: auto;
      justify-content: flex-start;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `
  })}
`;

MenuWrapper.LeftSide = styled.div`
  order: 1;
  margin: 0;
  padding: 0;

  ${breakpointMedia({
    md: css`
      width: 131px;
      height: 32px;
      order: initial;
      padding-right: 16px;
    `
  })}
`;

MenuWrapper.CentralSide = styled.ul`
  order: 3;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  padding: 12px;
  list-style: none;
  margin-top: 17px;
  align-items: center;
  border-top: 1px solid #88989E;
  justify-content: space-between;
  border-bottom: 1px solid #99989E;

  ${breakpointMedia({
    md: css`
      flex: 1;
      border: none;
      order: initial;
      padding-top: 0;
      max-width: 332px;
      padding-bottom: 0;
      margin-left: 28px;
      justify-content: space-between;
    `
  })}

  a {
    display: block;
    color: #88989E;
    text-align: center;
    text-decoration: none;
    transition: 200ms ease-in-out;

    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
    }

    ${breakpointMedia({
      xs: css`
        ${TextStyleVariants({ variant: 'smallestException' })}
      `,
      md: css`
        ${TextStyleVariants({ variant: 'paragraph1' })}
      `
    })}
  }
`;

MenuWrapper.RightSide = styled.div`
  flex: 1;
  order: 2;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;

  ${breakpointMedia({
    md: css`
      order: initial;
    `
  })}
`;

export default MenuWrapper;