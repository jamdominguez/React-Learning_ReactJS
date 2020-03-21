import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Count extends Component {
  constructor(props){
    super(props);
    console.log(this.props.initialCount)
    this.state = {count: this.props.initialCount} //initial value
    setInterval(()=> {
      this.setState({count : this.state.count+1});
    }, 1000);
  }
  render(){
  return <NumberCount number={this.state.count}/>
  }
}
Count.defaultProps = {
  initialCount: 0
}

class NumberCount extends Component {
  render(){
    return <span>{this.props.number}</span>
  }
}

class App extends Component{
  render() { 
    return (
      <div className="App">
        <header className="App-header">          
          <img src={logo} className="App-logo" alt="logo"/>
          <Count initialCount={100}/>
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