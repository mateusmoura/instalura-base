import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  border-radius: 4px;
  padding-left: 28px;
  align-items: center;
  padding-right: 28px;
  justify-content: center;

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    transition: .3s;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main.color};

    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default FooterWrapper;