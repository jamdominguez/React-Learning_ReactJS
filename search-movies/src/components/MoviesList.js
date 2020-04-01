import React from 'react'
import { Movie } from './Movie'

export const MoviesList = (props) => {
    const { movies }  = props        
    return(
        <div className='MoviesList'>
            {movies.map(movie => {
                return(
                    <div key={movie.imdbID} className='MoviesList-item'>
                        <Movie                          
                        poster={movie.Poster}
                        title={movie.Title} 
                        year={movie.Year} 
                        ></Movie>
                    </div>)})}
        </div>
    )
}