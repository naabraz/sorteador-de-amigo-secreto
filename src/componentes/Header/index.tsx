import { HeaderComponent, Logo, Participant } from './styles';

const Header = () => (
  <HeaderComponent>
    <Logo role='img' aria-label='Logo do Sorteador' />
    <Participant />
  </HeaderComponent>
);

export default Header;
