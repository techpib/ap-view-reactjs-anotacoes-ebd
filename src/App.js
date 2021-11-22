import React from 'react';
import './assets/App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import TelaInicial from './components/TelaInicial';
import FormLogin from './components/Login';
import FormCadastro from './components/Cadastro';

const App = () => {

  return (
    <BrowserRouter>
      <section className="pagina-base">
        <Routes>
          <Route path="/" element={<TelaInicial/>}/>
          <Route path="/login" element={<FormLogin />} />
          <Route path="/cadastro" element={<FormCadastro />} />
        </Routes>
      </section>
    </BrowserRouter>
  );

}

export default App;