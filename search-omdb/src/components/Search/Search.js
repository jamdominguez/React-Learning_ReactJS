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
        <div>
            <div className='div-search'>
                <form onSubmit={handleOnSubmit}>
                <h1 className='app-title'>Search Movies/Games/Series</h1>
                    <div>
                        <input
                            autoFocus 
                            id={inputTextId} 
                            className='input-text'
                            onChange={handleTextOnChange}
                            placeholder={inputTextPlaceHolder} 
                            type='text' 
                            value={inputTextValue} 
                        />
                        <button className='btn'>{buttonLabel}</button>
                    </div>
                </form>
            </div>
            <div className='parent'>
                <ElementInfoList results={results} />
            </div>
        </div>
    )
}
export default Search