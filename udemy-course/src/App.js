import React, { Component} from 'react';
import LifeCycleExample from './sections/LifeCycleExample'
import './App.css';

class App extends Component {
  render(){     
    //console.log('App - render');
    return (
      <div className="App">                 
        <LifeCycleExample />
      </div>
    );
  }
}
export default App;