import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';

import Header from './componentes/Header';
import Configuracao from './paginas/Configuracao';

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

  section {
    width: 100%;
    text-align: center;
    max-width: 900px;
  }

  h2 {
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 36px;
    color: #4B69FD;
  }

  ul li {
    font-size: 18px;
    font-weight: 300;
    margin: 8px 0;
  }
`;

const App = () => (
  <BrowserRouter>
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Configuracao />} />
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
);

export default App;
