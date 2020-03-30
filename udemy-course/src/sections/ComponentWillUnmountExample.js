import React, {Component} from 'react';



class ComponentToUnmont extends Component {
    state = { windowWidth: 0}

    _updateStateWithWindowWidth = () => {
        this.setState({ windowWidth: document.body.clientWidth })
    }

    componentDidMount() {
        console.log('componentDidMount')
        this._updateStateWithWindowWidth() //show the init width
        window.addEventListener('resize', this._updateStateWithWindowWidth);//add listener
    }

    componentWillUnmount() {
        console.log(this, 'componentWillUnmount');
        window.removeEventListener('resize', this._updateStateWithWindowWidth)// remove listener
    }

    render() {
        console.log('render')
        return(
        <p>Window width: {this.state.windowWidth}</p>
        )
    }
}


export default class ComponentWillUnmountExample extends Component {
    state = { showComponent: true }

    render() {
        if (this.state.showComponent){
            return(
                <div>
                    <h4>ComponentWillUnmountExample</h4>
                    <ComponentToUnmont />
                    <button onClick={() => this.setState({ showComponent: false })}>Unmount</button>
                </div>
            )
        } else {
            return(
                <p> Component unmounted! </p>
            )
        }
    }
}