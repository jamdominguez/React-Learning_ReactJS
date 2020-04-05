/**
 * Presentational component Search
 */
import React, { useState } from 'react'
import { Container, Card, Grid, Typography, TextField, Button } from '@material-ui/core'
import MovieIcon from '@material-ui/icons/Movie';
import styles from '../Styles'

export default () => {
    const [objState, setObjState] = useState({ editableText: '', disabledText: ''}) // Hook, works like this.state and setState. Initialize the state
    const classes = styles();

    const transformText = (value) => {
        return isNaN(value) || value.trim() === '' ?  value : (value * value).toString() 
    }
    
    const handleEditableTexOntChange = (e) => {
            const textValue = e.target.value
            setObjState({editableText: textValue, disabledText: transformText(textValue)})            
    }

    const handleCleanOnClik = () => {
        console.log('handleCleanOnClik')
    }

    const handleSeachOnClik = () => {
        console.log('handleSeachOnClik', objState)
    }
    return(        
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Welcome</Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon}/>
                    </Grid>
                </Grid>
                <TextField
                    className={classes.textFieldSearch}
                    onChange={handleEditableTexOntChange}
                    placeholder='Search...'
                    value={objState.editableText}
                />
                <TextField
                    className={classes.textFieldSearch}                    
                    disabled
                    value={objState.disabledText}                    
                />                
                <Grid className={classes.buttonsContainer}>
                    <Button onClick={handleCleanOnClik} variant='contained'>Clean</Button>
                    <Button className={classes.searchButton} color='primary' onClick={handleSeachOnClik} variant='contained'>Search</Button>
                </Grid>
            </Card>
        </Container>
    )

}