import React, { Component } from 'react'

export default class Form extends Component{
    constructor(){
        super();
        this.state = {
            inputName: 'User',
            inputTwitter: '@',
            inputTerms: true
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit');
        console.log(this.state);
    }
    handleClick = (e) => {
        console.log('handleClick');
    }
    handleChange = (e) => {
        this.setState({inputTerms: e.target.checked})
        console.log('handleChange');
        console.log(e.target.checked);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor='name'>Name: </label>
                    <input 
                        value={this.state.inputName} 
                        onChange={e => this.setState({inputName: e.target.value})}
                        ref={inputElement => this.inputName = inputElement} 
                        type='text' id='name' name='userName' placeholder='Enter your Name'/>
                </p>
                <p>
                    <label htmlFor='twitter'>Twitter: </label>
                    <input 
                        value={this.state.inputTwitter}
                        onChange={e => this.setState({inputTwitter: e.target.value})}
                        ref={inputElement => this.inputTwitter = inputElement} 
                        type='text' id='twitter' name='twitterAccount' placeholder='Enter your Twitter acount'/>
                </p>                
                <button onClick={this.handleClick}>Submit</button>                
                <p><label>
                    <input 
                        checked={this.state.inputTerms} 
                        onChange={this.handleChange} 
                        ref={inputElement => this.inputTerms = inputElement} 
                        type='checkbox' id='terms' name='termsAccepted'/>
                    Accepted terms
                </label></p>
            </form>
        )
    }
}