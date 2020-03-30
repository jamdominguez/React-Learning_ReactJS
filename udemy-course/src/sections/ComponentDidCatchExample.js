import React, {Component} from 'react';

class ButtonToThrowError extends Component {
    state = { throwError: false }

    render() {
        if(this.state.throwError) {
            throw new Error('Error thrown by ButtonToThrowError')
        } else {
            return(
                <button onClick={() => this.setState( {throwError: true })}>Throw Error</button>
            )
        }
    }
}

export default class ComponentDidCatchExample extends Component {
    state = {
        hasError: false,
        errorMsg: ''
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
        console.log({error, errorInfo})
        this.setState({
            hasError: true,
            errorMsg: error.toString()
        })
    }

    render() {
        if (this.state.hasError) {
            return(
                <div>
                    <p>Error happens: {this.state.errorMsg}</p>
                    <button onClick={() => this.setState({ hasError: false})}>Recover Component</button>
                </div>
            )
        } else {
            return(
                <div>
                    <h4>ComponentDidCatchExample</h4>
                    <ButtonToThrowError />
                </div>
            )
        }
    }
}
