import React from 'react'

export const Movie = (props) => {    
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={props.poster} alt={props.title}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.title}</p>
                        <p className="subtitle is-6">{props.year}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}