import styled from './node_modules/styled-components';

export const LogoFooterImage = styled.img`
  max-width: 280px;
  @media (max-width: 800px) {
    max-width: 200px;
  }
`;

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
