import React from 'react';

import Card from 'react-bootstrap/Card'
import './assets/App.css';

import FormLogin from './components/Login';
import FormCadastro from './components/Cadastro';

const App = () => {

  return (
      <section className="pagina-base">
        <Card className="card-login">
          <FormCadastro/>
        </Card>
      </section>
    );

}

export default App;