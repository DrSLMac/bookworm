import React from 'react'
import './Dashboard.css'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import BookGallery from '../BookGallery/BookGallery'
import PropTypes from 'prop-types';

const Dashboard = ({bookLists, filteredBookLists, filteredBooks, saveBook }) => {
    return (
        <div>
            <Header />
            <div className="dashboard-view">
                    <NavBar className="navbar-container" bookLists={bookLists} filteredBooks={filteredBooks}/>
                    <BookGallery 
                        bookLists={bookLists} 
                        filteredBookLists={filteredBookLists}
                        saveBook={saveBook}/>
               
            </div>
        </div>
    )
}

export default Dashboard

Dashboard.propTypes = {
    bookLists: PropTypes.arrayOf(PropTypes.object),
    filteredBookLists: PropTypes.arrayOf(PropTypes.object),
    filteredBooks: PropTypes.func.isRequired,
    saveBook: PropTypes.func.isRequired,
}