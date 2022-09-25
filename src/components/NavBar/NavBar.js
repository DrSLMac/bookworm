import React from 'react'
import './NavBar.css'
import Form from '../Form/Form'
import { NavLink } from 'react-router-dom'

const NavBar = ({filteredBooks}) => {

    return (
        <div className='navbar-container'>
        <h2>Not sure what to read?</h2>
        <h3>Let the Bookworm help you sort it out!</h3>
        <NavLink to='/SavedBooksSection' >
            SavedBooksSection
        </NavLink>
        <Form filteredBooks={filteredBooks} />
        </div>
    )
}

export default NavBar