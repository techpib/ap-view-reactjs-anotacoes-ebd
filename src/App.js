import React from 'react';

import Card from 'react-bootstrap/Card'
import './assets/App.css';

import FormLogin from './components/Login';

const App = () => {

  return (
      <section className="pagina-base">
        <Card className="card-login">
          <FormLogin/>
        </Card>
      </section>
    );

}

export default App;