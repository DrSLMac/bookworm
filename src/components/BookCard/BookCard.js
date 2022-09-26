import React from 'react'
import './BookCard.css'
import PropTypes from 'prop-types';

const BookCard = ({ author, title, bookCover, id, genre, rank, publisher, description, saveBook }) => {
    return (
        <section className='book-container'>
            <article className='book-card'>
                <div className="book-image-container">
                    <img className="book-image" src={bookCover} alt='book cover'/>
                </div>

                <div className='description-box'>    
                    <p className='title'>{title}</p>
                    <p className='author'>Author: {author}</p>
                    <p className='current-rank'>NY Times Rank: #{rank}</p>
                    <p className='genre'>Genre: {genre}</p>
                    <p className='description'>Description: {description}</p>
                    <p className='info-publishing'>Publisher: {publisher}</p>
                </div>
            </article>
                    <button className="save-button" onClick={() => saveBook(id)}>Save</button>
        </section>
    )
}

export default BookCard

BookCard.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bookCover: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    genre: PropTypes.string,
    rank: PropTypes.number.isRequired,
    publisher: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    saveBook: PropTypes.func
}


