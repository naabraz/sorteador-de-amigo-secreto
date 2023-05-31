import { createGlobalStyle } from 'styled-components';

import Header from './componentes/Header';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background: #4B69FD;
    border: 2px solid black;
    font-family: 'Poppins', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Header />
  </>
);

export default App;
