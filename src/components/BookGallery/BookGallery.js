import React from 'react'
import './BookGallery.css'
import BookCard from '../BookCard/BookCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Navigation } from "swiper";


const BookGallery = ({bookLists, filteredBookLists, saveBook}) => {
    // console.log('saveBook in bookGallery: ', saveBook )
    const bookShelves = bookLists.reduce((object, currentList) => {
        if(!object[currentList.list_name]) {
            object[currentList.list_name] = currentList.books
        }
        return object
    },{})

    const filteredBookShelves = filteredBookLists.map(filteredBooks => {
        const filteredBookSet = filteredBooks.books.map(book => {
            // console.log('book: ', book.author)
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
    console.log('filteredBookShelves: ', filteredBookShelves)

    const genres = Object.keys(bookShelves)
    console.log('genres: ', genres)
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



return (
        <section className='bookgallery-container'>
            {filteredBookLists.length !== 0 ? filteredBookShelves : allBooks}
        </section>


    // {this.state.searchQuery === '' ? movieCards : filteredMovies}
    // {filteredMovies.length === 0 && <h2>Sorry there are no movies with that title, please try again🥲</h2>}







/* 
            <div className='genre-carousel'>Hardcover Nonfiction: 
                <Swiper navigation={true} modules={[Navigation]}>    
                    <SwiperSlide>{getBooksByGenre("Hardcover Nonfiction")}</SwiperSlide>
                </Swiper>
            </div>

            <div className='genre-carousel'>Trade Fiction Paperback: 
                <Swiper navigation={true} modules={[Navigation]} >
                    <SwiperSlide>{getBooksByGenre("Trade Fiction Paperback")}</SwiperSlide>
                </Swiper>
            </div>

            <div className='genre-carousel'>Paperback Nonfiction: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Paperback Nonfiction")}</SwiperSlide>
                </Swiper>
            </div> */

            /* <div className='genre-carousel'>Advice How-To and Miscellaneous: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Advice How-To and Miscellaneous")}</SwiperSlide>
                </Swiper>
            </div>

            <div className='genre-carousel' >Childrens Middle Grade Hardcover: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Childrens Middle Grade Hardcover")}</SwiperSlide>
                </Swiper>
            </div>

            <div className='genre-carousel'>Picture Books: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Picture Books")}</SwiperSlide>
                </Swiper>
            </div>

            <div className='genre-carousel'>Series Books: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Series Books")}</SwiperSlide>
                </Swiper>
            </div>

            <div className='genre-carousel'>Young Adult Hardcover: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Young Adult Hardcover")}</SwiperSlide>
                </Swiper>
            </div>

            <div className='genre-carousel'>Audio Fiction: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Audio Fiction")}</SwiperSlide>
                </Swiper>
            </div> */

            /* <div className='genre-carousel'>Audio Nonfiction: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Audio Nonfiction")}</SwiperSlide>
                </Swiper>
            </div>

            <div className='genre-carousel'>Business Books: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Business Books")}</SwiperSlide>
                </Swiper>
            </div>

            <div className='genre-carousel'>Graphic Books and Manga: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Graphic Books and Manga")}</SwiperSlide>
                </Swiper>
            </div>

            <div className='genre-carousel'>Mass Market Monthly: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Mass Market Monthly")}</SwiperSlide>
                </Swiper>
            </div>

            <div className='genre-carousel'>Middle Grade Paperback Monthly: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Middle Grade Paperback Monthly")}</SwiperSlide>
                </Swiper>
            </div>

            <div className='genre-carousel'>Young Adult Paperback Monthly: 
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide>{getBooksByGenre("Young Adult Paperback Monthly")}</SwiperSlide>
                </Swiper>
            </div> */
         

//if filteredBookLists.length !== 0, display filteredBookShelves, else display bookShelves
        // if (!filteredBookShelves.length)
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