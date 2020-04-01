import React, { Component } from 'react'
import { ButtonBackToHome } from '../components/ButtonBackToHome'
import PropTypes from 'prop-types'

const API_KEY = '6e290af'
const API_END_POINT = `http://www.omdbapi.com/?apikey=${API_KEY}`

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    state = {
        movie: {}
    }

    componentDidMount() {
        console.log('routing inyection',this.props)
        const { id } = this.props.match.params
        fetch(`${API_END_POINT}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
          console.log(movie)
          this.setState({ movie })
        })
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return(
            <div>
                <ButtonBackToHome />
                <h1 className='title'>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3 className='subtitle'>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}