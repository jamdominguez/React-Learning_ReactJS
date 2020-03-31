import React, { Component} from 'react'
import BitCoinPriceContainer from './sections/Container_Component'
import './App.css'

class App extends Component {
  render() {    
    return (
      <div className="App">                 
        <h4> Pattern </h4>
        <BitCoinPriceContainer />    
      </div>
    );
  }
}
export default App;