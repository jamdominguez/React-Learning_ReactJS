import React, { Component} from 'react';
import ComponentWillUnmountExample from './sections/ComponentWillUnmountExample'
import './App.css';

class App extends Component {
  render(){     
    //console.log('App - render');
    return (
      <div className="App">                 
        <ComponentWillUnmountExample />
      </div>
    );
  }
}
export default App;