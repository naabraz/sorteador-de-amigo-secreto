import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';

import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

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
  <BrowserRouter>
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Formulario />} />
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
);

export default App;
