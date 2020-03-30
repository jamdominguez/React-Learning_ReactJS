import React, { Component} from 'react';
import ComponentDidCatchExample from './sections/ComponentDidCatchExample'
import './App.css';

class App extends Component {
  render(){     
    //console.log('App - render');
    return (
      <div className="App">                 
        <ComponentDidCatchExample />
      </div>
    );
  }
}
export default App;