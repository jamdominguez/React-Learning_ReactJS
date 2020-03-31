import React, {Component} from 'react'

export class SearchForm extends Component {    
    state = {
        inputMovie: '',
    }

    _handleChange = (e) => {
        this.setState( {inputMovie: e.target.value} )        
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        console.log('_handleSubmit', this.state)        
    }

    render() {
        return(
            <form onSubmit={this._handleSubmit}> 
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={this._handleChange}
                            placeholder={this.props.placeholder}
                            type="text" 
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            {this.props.label}
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
SearchForm.defaultProps = {
    label: 'Search',
    placeholder: 'Movie to search...'
}