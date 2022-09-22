import React from 'react'
import './BooksGallery.css'
import BookCard from '../BookCard/BookCard'

const BooksGallery = ({bookLists}) => {
    const bookShelves = bookLists.map((bookList) => {
        console.log ("bookList: ", bookList.list_name)
        const { list_id, title, list_name } = bookList
        return <BookCard 
                key={Math.random()}
                title={title}
                genre={list_name}
                id={list_id}
            />
        
    } )
    return (
        <main className='bookgallery-container'>
            <h2 className="bookgallery-container-text">This is where all the books will go</h2>
            {bookShelves}
        </main>
    )
}
//author
//book_image
//description
//title
//list-name(genre)

// Combined Print and E-Book Fiction
// Combined Print and E-Book Nonfiction
// Hardcover Fiction
// Hardcover Nonfiction
// Trade Fiction Paperback
// Paperback Nonfiction
// Advice How-To and Miscellaneous
// Childrens Middle Grade Hardcover
// Picture Books
// Series Books
// Young Adult Hardcover
// Audio Fiction
// Audio Nonfiction
// Business Books
// Graphic Books and Manga
// Mass Market Monthly
// Middle Grade Paperback Monthly
// Young Adult Paperback Monthly

export default BooksGallery