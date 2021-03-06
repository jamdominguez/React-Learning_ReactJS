import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, CircularProgress } from '@material-ui/core'
import queryString from 'query-string'

import { searchMovie } from '../../redux/actions/Search'
import { movieResults, isSearchLoading } from '../../redux/selectors'
import MovieResult from '../../component/movieResult/'

export default({ location }) => {    
    const dispatch = useDispatch()
    const movies = useSelector(state => movieResults(state))
    const isLoading = useSelector(state => isSearchLoading(state))

    //useEffect is a hook executed in componentDidMount and componentDidState
    useEffect(() => {
        const { movieName } = queryString.parse(location.search)
        if (movieName && !movies) dispatch(searchMovie({ movieName })) //to skyp dispatch when we are get the movies        
    })

    const renderMovies = () => {
        if (movies) {
            return(movies.map((value,index) => <MovieResult key={index} {...value} />))
        } else if (isLoading) {
            return <CircularProgress size={100} color='primary'/>
        } else {
            return <div/>
        }
    }

    return(
        <Container>
            {renderMovies()}
        </Container>
    )
}