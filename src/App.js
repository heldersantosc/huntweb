/* Aqui é onde será executado a aplicacao com os componentes */
import React, {Component} from 'react';
import Header from './components/header/index'
import Main from './pages/main/index';
import "../src/styles.css"


class App extends Component {
  render(){
    return(
      <div className='App'>
        <Header></Header>
        <Main></Main>
      </div>
    )
  }
}

export default App;
