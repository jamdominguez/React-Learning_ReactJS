import React from 'react'
import ElementInfoList from '../ElementsInfoList/ElementsInfoList'


const Search = (props) => {
    const { 
        inputTextId,
        inputTextValue, 
        inputTextPlaceHolder, 
        buttonLabel,
        results,
        handleTextOnChange,
        handleOnSubmit
    } = props
       
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
            <ElementInfoList results={results} />
        </form>
    )
}
export default Search