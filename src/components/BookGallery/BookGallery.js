import React from 'react'
import './BookGallery.css'
import BookCard from '../BookCard/BookCard'
import { Swiper, SwiperSlide } from 'swiper/react'


const BookGallery = ({bookLists}) => {
    const genreArray = []
        bookLists.forEach((bookList) => {
        genreArray.push(bookList.list_name)
    })
console.log('genreArray: ', genreArray)

let genreBooks = []
const genreBookshelf = genreArray.map(genre => {
    bookLists.forEach(bookList => {
        if (bookList.list_name === genre) {
            genreBooks.push(bookList.books)
    }
    return genreBooks
    })
})
console.log('genreBooks(array of books for each genre): ', genreBooks)


    const bookShelves = bookLists.map((bookList) => {
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
    
    console.log('bookShelves: ', bookShelves)

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
            <Swiper 
            spaceBetween={50}
            slidesPerView={3}
            onslideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log('swiper')}
            >
                <SwiperSlide>{bookShelves}</SwiperSlide>
            </Swiper>
                
                {/* <h2>{genreArray}</h2> */}
                {/* {bookShelves} */}
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