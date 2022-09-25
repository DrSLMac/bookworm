import React from 'react'
import './SavedBooksContainer.css'
import BookCard from '../BookCard/BookCard'

const SavedBooksContainer = ({ savedBooks }) => {
    console.log('savedBooks: ', savedBooks)
    const savedBookShelf = savedBooks.map(favoriteBook => {
        console.log('favoriteBook: ', favoriteBook)

        // const savedBookSet = favoriteBook.map(book => {
        //     console.log('book: ', book.author)
            const { author, title, book_image, book_uri, rank, description, publisher } = favoriteBook
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
                            />
        })
        return savedBookShelf
    }


export default SavedBooksContainer