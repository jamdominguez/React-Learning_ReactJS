import React from 'react'
import SearchGamesPres from '../SearchGamesPres'

class SearchGames extends React.Component {
    state = {
        inputTextValue: '',
        inputTextId: 'inputTextId',
        inputTextPlaceHolder: 'Search a game...',
        buttonLabel: 'Search'
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
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