import React, { Component } from 'react';
import './App.css';
import Form from './sections/Form'

class App extends Component {
  render() {     
    return (
      <div className="App">
        <h4>Forms</h4>
          <Form/>
      </div>
    );
  }
}
export default App;