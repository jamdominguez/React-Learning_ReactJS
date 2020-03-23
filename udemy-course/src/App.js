import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render() { 
    const numbers = [1,1,3,4,5];
    return (
      <div className="App">
          <h4> Working with lists</h4>
          {numbers.map((number,index) => {
              return <p key={index}>I am the number {number}</p>
          })}
      </div>
    );
  }
}
export default App;