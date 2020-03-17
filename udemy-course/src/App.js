import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//New component Hello
/* function Hello(props){
  return <h2>Hello World! {props.title}</h2>;
} */

//New component Hello
//const Hello = (props) => <h2>Hello World! {props.title}</h2>;

class Hello extends Component{
  render(){
    return (<h2>Hello World! {this.props.title}</h2>);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello title="React rules"/>
        <h4> It is a component example</h4>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
