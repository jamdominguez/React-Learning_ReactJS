import React, { useState } from 'react'
import { Container, Card, Grid, Typography, TextField, Button } from '@material-ui/core'

export default () => {
    const [textToSearch, setTextToSearch] = useState('') // Hook, works like this.state and setState. Initialize the state
    
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
        <Container>
            <Card>
                <Grid container>
                    <Grid>
                        <Typography>Welcome</Typography>
                    </Grid>
                    <Grid>
                        <label></label>
                    </Grid>
                </Grid>
                <TextField
                    onChange={handleSetTextToSearch}
                    placeholder='Search...'
                    value={textToSearch}
                />
                <Grid>
                    <Button onClick={handleCleanOnClik} variant='contained'>Clean</Button>
                    <Button onClick={handleSeachOnClik} variant='contained' color='primary'>Search</Button>
                </Grid>
            </Card>
        </Container>
    )

}