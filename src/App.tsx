import { createGlobalStyle } from 'styled-components';

import Header from './componentes/Header';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Header />
  </>
);

export default App;
