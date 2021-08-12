import styled from 'styled-components';

const MenuWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  align-items: center;
  padding-right: 28px;
  justify-content: space-between;
  font-family: 'Rubik', sans-serif;
`;

MenuWrapper.LeftSide = styled.div`
  order: 1;
  margin: 0;
  padding: 0;
`;

MenuWrapper.CentralSide = styled.ul`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  display: flex;
  padding: 12px;
  list-style: none;
  margin-top: 17px;
  align-items: center;
  border-top: 1px solid #88989E;
  justify-content: space-between;
  border-bottom: 1px solid #99989E;

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
  }
`;

MenuWrapper.RightSide = styled.div`
  flex: 1;
  order: 2;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
`;

export default MenuWrapper;