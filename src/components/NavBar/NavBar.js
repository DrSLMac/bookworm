import React from 'react'
import './NavBar.css'
import Form from '../Form/Form'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

const NavBar = ({filteredBooks}) => {

    return (
        <div className='navbar-container'>
        <h2>Not sure what to read?</h2>
        <h3>Let the Bookworm help you sort it out!</h3>
        <NavLink to='/Dashboard' >
            Back to the Dashboard
        </NavLink>
        <div></div>
        <NavLink className="saved-book-navigation" to='/SavedBooksSection' >
            Saved Books Section
        </NavLink>

        <Form filteredBooks={filteredBooks} />
        </div>
    )
}

export default NavBar

NavBar.propTypes = {
    filteredBooks: PropTypes.func
}