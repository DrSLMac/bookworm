import React from 'react'
import './BookCard.css'

const BookCard = ({ title, genre, id }) => {
    return (
        <div>
            <h3>Book card holder</h3>
            <h3>{genre}</h3>
            <h3>{id}</h3>
            <h3>{title}</h3>
        </div>

    )
}

export default BookCard

//author
//book_image
//description
//title
//list-name(genre)