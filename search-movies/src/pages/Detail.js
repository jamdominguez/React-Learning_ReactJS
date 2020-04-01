import React, { Component } from 'react'

const API_KEY = '6e290af'
const API_END_POINT = `http://www.omdbapi.com/?apikey=${API_KEY}`

export class Detail extends Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        fetch(`${API_END_POINT}&i=${this.props.id}`)
        .then(res => res.json())
        .then(movie => {
          console.log(movie)
          this.setState({ movie })
        })
    }

    _goBack() {
        window.history.back()
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return(
            <div>
                <button onClick={this._goBack}>Go Back</button>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}