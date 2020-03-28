import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    console.log('constructor')
    super(props);
    this.state = {msg:new Date().toLocaleTimeString(), mouseX: 0, mouseY: 0};
  }

  componentDidMount(){
    console.log('componentDidMount')    
    document.addEventListener('click',(e)=>{ //this subscribing must be removed
      const {clientX, clientY} = e;
      this.setState({msg: new Date().toLocaleTimeString(), mouseX: clientX, mouseY: clientY});
      console.log(this.state)
    });
  }

  render(){     
    console.log('render')
    return (
      <div className="App">                 
        {this.state.msg} - ({this.state.mouseX},{this.state.mouseY})
      </div>
    );
  }
}
export default App;