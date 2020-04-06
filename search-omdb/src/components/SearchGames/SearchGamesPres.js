import React from 'react'


const SearchGamesPres = (props) => {
    const { 
        inputTextId,
        inputTextValue, 
        inputTextPlaceHolder, 
        buttonLabel,
        results,
        handleTextOnChange,
        handleOnSubmit} = props

    const renderResults = (results) => {                
        if (results) {
            console.log('results', results)
            if (results.Response === 'True') {
                return(
                    results.Search.map(result => 
                        <div key={result.imdbID}>
                            <img src={result.Poster} alt={result.Title} />
                            <p>{result.Title} <small>{result.Year}</small> </p>                        
                        </div>
                    )
                )
            } else {
            return <small>No search results...</small>
            }
        } 
    }
        
    return(
        <form onSubmit={handleOnSubmit}>
            <div>
                <input 
                    id={inputTextId} 
                    onChange={handleTextOnChange}
                    placeholder={inputTextPlaceHolder} 
                    type='text' 
                    value={inputTextValue} 
                />
                <button>{buttonLabel}</button>
            </div>
            {renderResults(results)}
        </form>
    )
}
export default SearchGamesPres