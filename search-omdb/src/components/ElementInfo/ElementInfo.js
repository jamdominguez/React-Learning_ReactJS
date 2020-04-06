import React from 'react'
import { Link } from 'react-router-dom'

const ElementInfoPres = (props) => {
    const {imdbID, Title, Poster, Year } = props        
    return(  
        <Link to={`/detail/${imdbID}`}>
            <div>
                <figure>
                    <img src={Poster} alt={Title} />
                </figure>
                <p>{Title} <small>{Year}</small> </p>                        
            </div>
        </Link>            
    )
}
export default ElementInfoPres