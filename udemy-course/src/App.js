import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Box extends Component{
  render(){
    return(
      <div style={{border: '1px solid black', margin: '5px', padding: '5px'}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component{
  static propTypes = {
    author : PropTypes.string.isRequired //specified author is a String and is Required
  }
  constructor(props){
    super(props);
    if (typeof this.props.author === 'undefined'){
      console.warn('author is required');
      // throw new Error('author is required');
    }
  }
  render(){
    const {author, children, date, title} = this.props;
    return(
        <section>
          <h2>{title}</h2>
          {author && <p>Wrote by {author} </p>}
          <Box> {date} </Box>
          <section>
            {children}
          </section>
        </section>
    )
  }
}

class App extends Component {
  render() {     
    return (
      <div className="App">        
          <Article 
            author='Someone'
            date={new Date().toLocaleDateString()} 
            title='Article Example'>
              <p> 
                  This is a children example using a component inside another component
                  and both with children
             </p>
             <p>
                This is <strong> another paragragh inside the the component</strong>
             </p>
          </Article> 
      </div>
    );
  }
}
export default App;