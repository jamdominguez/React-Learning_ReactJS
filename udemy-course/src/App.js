import React, { Component} from 'react';
import './App.css';

class Button extends Component {
  render(){
    return(
      <button style={ {borderColor: this.props.borderColor, display: 'block'} } title={this.props.title}>
        {this.props.label}
      </button>
    )
  }
}
Button.defaultProps = {
  borderColor: '#09f'
}

class ButtonDanger extends Component {
  render() {
    return(
      <Button borderColor='red' label={this.props.label} />
    )
  }
}

class ButtonWithLegend extends Component {
  render() {
    return(
      <div>
      <Button borderColor={this.props.borderColor} label={this.props.label} />
      <small> {this.props.legend} </small>
      </div>
    )
  }
}

class App extends Component {
  render() {     
    //console.log('App - render');
    return (
      <div className="App">                 
        <h4> Composition vs Heritage </h4>
        <Button label='Click Me' /><br/>
        <ButtonDanger label='Danger!' /><br/>
        <ButtonWithLegend label='Legend' legend='It is a little legend' borderColor='Yellow'/>
      </div>
    );
  }
}
export default App;