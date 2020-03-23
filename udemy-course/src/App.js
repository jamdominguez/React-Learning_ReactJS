import React, { Component } from 'react';
import ConditionalSection from './sections/ConditionalSection'
import './App.css';

class App extends Component{
  render() { 
    return (
      <div className="App">
          <ConditionalSection/>
      </div>
    );
  }
}
export default App;