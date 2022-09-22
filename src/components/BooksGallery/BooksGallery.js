import React from 'react'
import './BooksGallery.css'
import BookCard from '../BookCard/BookCard'

const BooksGallery = ({bookLists}) => {
    let genreArray = []

    const bookShelves = bookLists.map((bookList) => {
        console.log('bookList: ', bookList)
        console.log ("bookList.books: ", bookList.books[0])
        //bookList.list_name returns the genre
        //for each genre, create an array of the top 15 books listed for that array
        //bookList.forEach((bookList) => {
        // genreArray.push(bookList.list_name)
        // console.log ("genreArray: ", genreArray)
        // return genreArray})

        const { author, title, book_image, book_uri, display_name } = bookList.books[0]
        return <BookCard 
                key={Math.random()}
                author={author}
                title={title}
                bookCover={book_image}
                genre={display_name}
                id={book_uri}
            />
    } )

    return (
        <main className='bookgallery-container'>
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