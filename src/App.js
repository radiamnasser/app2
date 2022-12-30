import React from "react";
import Form from "./Form";
import Age from './Age';
import Time from "./Time";

import './App.css';


class App extends React.Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">

          <Form pseudo='radia' email='radia@radia.fr' Ageage='34' />
          
          <Time />
          <Age />
          
        </header>
      </div>
    );
  }

}

export default App;
