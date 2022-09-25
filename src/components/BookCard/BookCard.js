import React from 'react'
import './BookCard.css'

const BookCard = ({ author, title, bookCover, id, genre, rank, publisher, description, saveBook }) => {
    // console.log('saveBook in bookCard: ', saveBook )
    // console.log('id: ', id)
    // console.log('bookCover: ', bookCover)
    return (
        <section>
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
                    <button onClick={() => saveBook(id)}>Save</button>
            </article>
        </section>
    )
}

export default BookCard

//author
//book_image
//description
//title
//list-name(genre)


