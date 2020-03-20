import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component {
  render() {
    //Restructuration
    const {
      arrayOfNumbers,
      isActived,
      multiply,
      title
    } = this.props;  

    const textBoolean = isActived ? 'Yes' : 'No';
    const mappedNumbers = arrayOfNumbers.map(multiply).join(", ")
    return (
      <div>
        {title}
        <p>{textBoolean}</p>
        <p>Result: {multiply(5)}</p>
        <p>Result map: {mappedNumbers}</p>
      </div>
    )
  }
}

class Title extends Component {
  render() {
  return <h1>{this.props.text} - {this.props.text2}</h1>
  }
}
Title.defaultProps = {
  text: 'Default Component Title',
  text2: 'Another Default Title'
}  

class App extends Component{
  render() { 
    return (
      <div className="App">
        <header className="App-header">          
          <Title text="Hi"/>
          <img src={logo} className="App-logo" alt="logo"/>
          <Text
            arrayOfNumbers = {[2,4,5]}
            isActived
            multiply={(number) => number*2}
            title={<h1>It is a title</h1>}
          />
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
}
export default App;