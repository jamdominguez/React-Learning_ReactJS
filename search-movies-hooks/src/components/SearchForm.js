import React, { useState } from 'react'
import { Container, Card, Grid, Typography, TextField, Button, makeStyles } from '@material-ui/core'
import styles from '../styles'

export default () => {
    const [textToSearch, setTextToSearch] = useState('') // Hook, works like this.state and setState. Initialize the state
    const classes = styles();
    
    const handleSetTextToSearch = (e) => {
            setTextToSearch(e.target.value)            
    }

    const handleCleanOnClik = () => {
        console.log('handleCleanOnClik')
    }

    const handleSeachOnClik = () => {
        console.log('handleSeachOnClik', textToSearch)
    }
    return(        
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Welcome</Typography>
                    </Grid>
                    <Grid>
                        <label></label>
                    </Grid>
                </Grid>
                <TextField
                    className={classes.textFieldSearch}
                    onChange={handleSetTextToSearch}
                    placeholder='Search...'
                    value={textToSearch}
                />
                <Grid className={classes.buttonsContainer}>
                    <Button onClick={handleCleanOnClik} variant='contained'>Clean</Button>
                    <Button className={classes.searchButton} color='primary' onClick={handleSeachOnClik} variant='contained'>Search</Button>
                </Grid>
            </Card>
        </Container>
    )

}