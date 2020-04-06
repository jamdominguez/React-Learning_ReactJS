import React from 'react'
import Search from './Search'
import { search } from '../../API'

class SearchContainer extends React.Component {
    state = {
        inputTextValue: '',
        inputTextId: 'inputTextId',
        inputTextPlaceHolder: 'Search a game...',
        buttonLabel: 'Search',
        results: null       
    }

    handleOnSubmit = (e) => {
        e.preventDefault()        
        search(this.state.inputTextValue, (results) => (this.setState({ ...this.state, results})))        
    }

    handleTextOnChange = (e) => {
        const inputTextValue = e.target.value
        this.setState({ ...this.state, inputTextValue })
    }

    render(){          
        return(            
            <Search
                {...this.state} 
                handleTextOnChange={this.handleTextOnChange} 
                handleOnSubmit={this.handleOnSubmit}
            />
        )
    }
}
export default SearchContainer