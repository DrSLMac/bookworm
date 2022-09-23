import React from 'react'
import './BookCard.css'

const BookCard = ({ author, title, bookCover, id, genre, rank, publisher, description }) => {
    // console.log('bookCover: ', bookCover)
    return (
        <article className='book-card-container'>
            <div className="book-card">
                <img className="bookCover-container" src={bookCover} alt='book cover'/>
            </div>

            <div className='description-box'>    
                <p className='title'>{title}</p>
                <p className='author'>{author}</p>
                <p className='genra'>{genre}</p>
                <p className='current-'>NY Times Current Rank: {rank}</p>
                <p className='description'>{description}</p>
                <p className='info-publishing'>Publisher: {publisher}</p>
            </div>

        </article>
    )
}

export default BookCard

//author
//book_image
//description
//title
//list-name(genre)


