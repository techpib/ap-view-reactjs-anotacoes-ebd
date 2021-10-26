import React, {Component} from 'react';

import './assets/App.css';

import FormLogin from './components/Login';

class App extends Component {

  render(){
    return (
      <section className="pagina-base">
        <FormLogin/>
      </section>
    );
  }

}

export default App;