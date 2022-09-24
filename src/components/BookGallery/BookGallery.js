import React from 'react'
import './BookGallery.css'
import BookCard from '../BookCard/BookCard'

const BookGallery = ({bookLists}) => {
    const genreArray = []
        bookLists.forEach((bookList) => {
        genreArray.push(bookList.list_name)
    })
console.log('genreArray: ', genreArray)

    const bookShelves = bookLists.map((bookList) => {
        console.log('bookList: ', bookList.list_name)
        // let genre = []
        genreArray.map(genre => {
            console.log('genre: ', genre)
            genre = []
            if (bookList.list_name === genre) {
                genre.push()
            }
        })
        // console.log ("bookList.books: ", bookList.books[0])
        //if bookList.list_name === bookList.display_name
        const { author, title, book_image, book_uri, rank, description, publisher } = bookList.books[0]
        return <BookCard 
                key={Math.random()}
                author={author}
                title={title}
                bookCover={book_image}
                genre={bookList.display_name}
                rank={rank}
                description={description}
                publisher={publisher}
                id={book_uri}
            />
    } )

//     const genreBookShelf = bookLists.reduce((genreArray, bookList) => {
//         bookList.forEach((genre) => {
//             if (!genre.list_name) {
//             genre.list_name=[]
//         }
            
//         })
//         return genreArray
//     }, [])
//     return genreBookShelf
//     console.log('genreBookShelf: ', genreBookShelf)
// console.log(genreBookShelf)

    return (
        <section className='bookgallery-container'>
            <article className='books-container'>
                {/* <h2>{genreBookShelf}</h2> */}
                {bookShelves}
            </article>
        </section>
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

export default BookGallery