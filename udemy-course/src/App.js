import React, { Component} from 'react';
import FetchExample from './sections/FetchExample'
import './App.css';

class App extends Component {
  render(){     
    console.log('App - render');
    return (
      <div className="App">                 
        <FetchExample />
      </div>
    );
  }
}
export default App;