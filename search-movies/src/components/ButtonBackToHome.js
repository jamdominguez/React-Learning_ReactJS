import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonBackToHome = () => {
    return(
        <Link to={'/'} className='button is-info'>Go Home</Link>
    )
}