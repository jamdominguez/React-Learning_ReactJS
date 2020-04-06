import React from 'react'
import ElementDetailContainer from '../components/ElementDetail/ElementDetailContainer'

const Detail = (props) => {
    console.log('routing_inyection', props)
    return(
        <ElementDetailContainer {...props}/>
    )
}
export default Detail