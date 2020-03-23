import React, { Component } from 'react'

class LogingButton extends Component {
    render() {
        return(
            <button>Login</button>
        )
    }
}

class LogoutButton extends Component {
    render() {
        return(
            <div>
                <p>Welcome</p>
                <button>Logout</button>
            </div>
        )
    }
}

export default class ConditionalSection extends Component{
    constructor() {
        super();
        this.state = { logged : false};
    }
    render() {        
        return(
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.logged ? <LogoutButton/> : <LogingButton/>}
            </div>
        )
    }
}