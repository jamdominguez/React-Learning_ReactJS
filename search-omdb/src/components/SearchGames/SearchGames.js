import React from 'react'
import SearchGamesPres from './SearchGamesPres'

const API_KEY = '6e290af'
const API_END_POINT = `http://www.omdbapi.com/?apikey=${API_KEY}`

class SearchGames extends React.Component {
    state = {
        inputTextValue: '',
        inputTextId: 'inputTextId',
        inputTextPlaceHolder: 'Search a game...',
        buttonLabel: 'Search',
        results: null       
    }

    APICall = (toSearch) => {        
        fetch(`${API_END_POINT}&s=${toSearch}`)
        .then(res => res.json())
        .then(results => { 
            this.setState({ ...this.state, results})
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        console.log('handleOnSubmit', this.state)
        this.APICall(this.state.inputTextValue)
    }

    handleTextOnChange = (e) => {
        const inputTextValue = e.target.value
        this.setState({ ...this.state, inputTextValue })
    }

    render(){        
        return(
            <SearchGamesPres 
                {...this.state} 
                handleTextOnChange={this.handleTextOnChange} 
                handleOnSubmit={this.handleOnSubmit}
            />
        )
    }
}
export default SearchGames