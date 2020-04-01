import React, {Component} from 'react'

const API_KEY = '6e290af'
const API_END_POINT = `http://www.omdbapi.com/?apikey=${API_KEY}`

export class SearchForm extends Component {    
    state = {
        inputMovie: '',
    }

    _handleChange = (e) => {
        this.setState( {inputMovie: e.target.value} )        
    }

    _handleSubmit = (e) => {
        e.preventDefault()        
        fetch(`${API_END_POINT}&s=${this.state.inputMovie}`)
        .then(res => res.json())
        .then(data =>{
            console.log(this.state.inputMovie, data)
            const { Search = [] } = data  //default value for Search thanks to ES6          
            this.props.onResults(Search)
        })
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