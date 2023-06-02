import styled from 'styled-components';

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;

  @media screen and (max-width: 800px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.div`
  background-image: url('/logo.png');
  width: 351px;
  height: 117px;

  @media screen and (max-width: 800px) {
    background-image: url('/logo-pequeno.png');
    width: 235px;
    height: 199px;
  }
`;

export const Participant = styled.div`
  background-image: url('/participante.png');
  z-index: 1;
  width: 450px;
  height: 277px;
`;
