import React from 'react'
import { Link } from 'react-router-dom'

const ElementInfoPres = (props) => {
    const {imdbID, Title, Poster, Year } = props        
    return(  
        <Link className='child' to={`/detail/${imdbID}`}>
            
                <figure>
                    <img className='detail-poster' src={Poster} alt={Title} />
                    <p className='title-result'>{Title} | <small>{Year}</small> </p>                        
                </figure>
            
        </Link>            
    )
}
export default ElementInfoPres