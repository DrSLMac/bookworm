import React from 'react'
import './BookCard.css'

const BookCard = ({ author, title, bookCover, id, genre }) => {
    // console.log('bookCover: ', bookCover)
    return (
        <div className="book-card">
            <img className="bookCover-container" src={bookCover} alt="book cover"/>
            <h3>{genre}</h3>
            <h3>{title}</h3>
            <h3>{author}</h3>
        </div>

    )
}

export default BookCard

//author
//book_image
//description
//title
//list-name(genre)