import React from 'react'
import './BookGallery.css'
import BookCard from '../BookCard/BookCard'

const BookGallery = ({bookLists, filteredBookLists, saveBook}) => {
    const bookShelves = bookLists.reduce((object, currentList) => {
        if(!object[currentList.list_name]) {
            object[currentList.list_name] = currentList.books
        }
        return object
    },{})

    const filteredBookShelves = filteredBookLists.map(filteredBooks => {
        const filteredBookSet = filteredBooks.books.map(book => {
            const { author, title, book_image, book_uri, rank, description, publisher } = book
                        return <BookCard 
                            key={Math.random()}
                            author={author}
                            title={title}
                            bookCover={book_image}
                            // genre={filteredBookLists[0].list_name}
                            rank={rank}
                            description={description}
                            publisher={publisher}
                            id={book_uri}
                            saveBook={saveBook}
                            />
        })
        return filteredBookSet
    })
    // console.log('filteredBookShelves: ', filteredBookShelves)

    const genres = Object.keys(bookShelves)
    // console.log('genres: ', genres)
    const allBooks = genres.map(genre => {
        const readingMaterial = bookShelves[genre].map((book) => {
            const { author, title, book_image, book_uri, rank, description, publisher } = book
                    return <BookCard 
                        key={Math.random()}
                        author={author}
                        title={title}
                        bookCover={book_image}
                        genre={genre}
                        rank={rank}
                        description={description}
                        publisher={publisher}
                        id={book_uri}
                        saveBook={saveBook}
                        />
        })
        return readingMaterial
    })
    console.log('allBooks: ', allBooks)

return (
        <section className='bookgallery-container'>
            {filteredBookLists.length !== 0 ? filteredBookShelves : allBooks}
        </section>

    )
}

export default BookGallery

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