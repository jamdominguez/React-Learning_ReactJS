import React from 'react'
import { Card, Grid, Typography, Button } from '@material-ui/core'

import styles from '../../Styles'

const MovieResult = ({ Title, Year, Type, imdbID, Poster}) => {
    const classes = styles()
    return(
        <Card className={classes.cardContainerResults}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster}/>                
                </Grid>
                <Grid item className={classes.titlesContainer}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>                    
                   <Button color='primary' variant='contained'> Show more </Button>
                </Grid>
            </Grid>
        </Card>
    )
}
export default MovieResult