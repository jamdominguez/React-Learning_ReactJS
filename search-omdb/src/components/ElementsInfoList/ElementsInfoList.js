import React from 'react'
import ElementInfo from '../ElementInfo/ElementInfo'

const ElementInfoList = (props) => {    
    if (props.results) {
        const { results } = props        
        if (results.Response === 'True') {            
            return(                                
                results.Search.map(result => 
                    <ElementInfo key={result.omdbId}
                        {...result}                        
                    />
                )
            )
        } else {
            return <small>No search results...</small>
        }
    } else {
    return <></>
    }     
}
export default ElementInfoList