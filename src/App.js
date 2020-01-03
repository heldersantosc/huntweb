/* Aqui é onde será executado a aplicacao com os componentes */
import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/header';
import "./styles.css"


const App = () => (

  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
