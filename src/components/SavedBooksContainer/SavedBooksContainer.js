import React from 'react'
import './SavedBooksContainer.css'
import BookCard from '../BookCard/BookCard'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import PropTypes from 'prop-types';

const SavedBooksContainer = ({ savedBooks }) => {
    const savedBookShelf = savedBooks.map(favoriteBook => {
            const { author, title, book_image, book_uri, rank, description, publisher } = favoriteBook
                        return <BookCard 
                            key={Math.random()}
                            author={author}
                            title={title}
                            bookCover={book_image}
                            genre={savedBooks[0].list_name}
                            rank={rank}
                            description={description}
                            publisher={publisher}
                            id={book_uri}
                            />
        })
        return (
        <div>
            <Header />
            <div className='saved-nav-gal'>
                <NavBar className="savedNavBar"/>
                <div className='savedBooksGalleryContainer' >
                        <h2 className='saved-books-title'>Saved Books</h2>
                        <div className='savedBooksGallery'>
                            {savedBookShelf}
                        </div>
                </div>
            </div>
        </div>
        )
    }


export default SavedBooksContainer

SavedBooksContainer.propTypes = {
    savedBooks: PropTypes.arrayOf(PropTypes.object)
}