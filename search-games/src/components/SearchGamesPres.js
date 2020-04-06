import React from 'react'

const SearchGamesPres = (props) => {
    const { 
        inputTextId,
        inputTextValue, 
        inputTextPlaceHolder, 
        buttonLabel, 
        handleTextOnChange,
        handleOnSubmit} = props

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
        </form>
    )
}
export default SearchGamesPres