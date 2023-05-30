import styled from 'styled-components';

const HeaderComponent = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4B69FD;
`;

const Header = () => (
  <HeaderComponent>
    <img src='/logo-pequeno.png' alt='logo' width={235} />
    <img src='/participante.png' alt='logo' width={450} />
  </HeaderComponent>
);

export default Header;
