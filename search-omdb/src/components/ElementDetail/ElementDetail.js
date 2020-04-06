import React from 'react'
import { Link } from 'react-router-dom'

const ElementDetail = (props) => {
    console.log('ElementDetail props', props)
    const { Title, Year, Poster, Runtime, Genre, Director, Writer, Actors, Plot, Metascore} = props.element
    
    const getPointClass = (Metascore) => {
        const points = parseInt(Metascore)
        let pointClass = 'bad'
        if (points > 69 ) pointClass = 'good'
        else if (points > 49) pointClass = 'medium'
        return `points-metascore ${pointClass}`
    }

    return(        
        <div>
            <h2 class='title'>{Title}</h2>
            <div className='div-detail'>
                <div>
                    <img src={Poster} alt={Title} className='detail-poster'/>                    
                </div>
                <div>
                    <h1 className={getPointClass(Metascore)}>{Metascore}<small className='metascore'> Metascore</small></h1>
                    <small className='plot'>{Plot}</small>
                    <div className='summary'>
                        <p><strong>Genre:</strong> {Genre} Year: {Year}</p>
                        <p><strong>Runtime:</strong> {Runtime}</p>
                        <p><strong>Director:</strong> {Director}</p>
                        <p><strong>Writer:</strong> {Writer}</p>
                        <p><strong>Actors:</strong> {Actors}</p>                
                    </div>
                    <div align='right'>
                        <Link to='/' className='lg'><button className='btn'>Back Home</button> </Link>                    
                    </div>
                </div>
            </div>        
        </div>   
    )
}
export default ElementDetail