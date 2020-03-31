import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
/*
class Article extends Component {
  render() {
    return(
      <section>
        <h2>{this.props.title}</h2>
        <p><em> Wrote by {this.props.author}</em></p>
        <span>{this.props.date}</span>
        <article>
          {this.props.children}
        </article>
      </section>
    )
  }
}
*/

function Article(props) {
  return(
    <section>
      <h2>{props.title}</h2>
      <p><em> Wrote by {props.author}</em></p>
      <span>{props.date}</span>
      <article>
        {props.children}
      </article>
    </section>
  )
}
Article.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.any,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
/*
class Button extends Component {
  render() {
    return(
      <button style={ {borderColor: this.props.borderColor, display: 'block'} } title={this.props.title}>
        {this.props.label}
      </button>
    )
  }
}
*/
const Button = ({borderColor = 'blue', label, title}) => (
  <button style={ {borderColor: borderColor, display: 'block'} } title={title}>
    {label}
  </button>
)
Button.propTypes = {
  borderColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  title: PropTypes.string
}

class App extends Component {
  render() {    
    return (
      <div className="App">                 
        <h4> Steless Components </h4>
        <Article 
          author='JRR Tolkien' 
          date={new Date().toLocaleTimeString()}
          title='The Lord of the Rings'
        > 
          The Lord of the Rings is an epic[1] high-fantasy novel written by English author and scholar J. R. R. Tolkien...]<br/>
          The title of the novel refers to the story's main antagonist, the Dark Lord Sauron,[a] who had in an earlier age ...<br/>
          Although generally known to readers as a trilogy, the work was initially intended by Tolkien to be one volume ...
        </Article>
        <Button 
          //borderColor='Orange'
          label='Read more...' 
          title='A button' 
        />
      </div>
    );
  }
}
export default App;