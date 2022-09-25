import React from 'react'
import './BookGallery.css'
import BookCard from '../BookCard/BookCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Parallax, Navigation, Mousewheel, Keyboard } from "swiper";


const BookGallery = ({bookLists}) => {
    const bookShelves = bookLists.reduce((object, currentList) => {
        if(!object[currentList.list_name]) {
            object[currentList.list_name] = currentList.books
        }
        return object
    },{})
    console.log('bookShelves: ', bookShelves)
    // const genres = Object.keys(bookShelves)
    // console.log('genres: ', genres)
    // const genreBooks = genres.map(genre => {
    //     const readingMaterial = bookShelves[genre].map((book) => {
    //         const { author, title, book_image, book_uri, rank, description, publisher } = book
    //                 return <BookCard 
    //                     key={Math.random()}
    //                     author={author}
    //                     title={title}
    //                     bookCover={book_image}
    //                     genre={genre}
    //                     rank={rank}
    //                     description={description}
    //                     publisher={publisher}
    //                     id={book_uri}
    //                     />
    //     })
    //     return readingMaterial
    // })
const getBooksByGenre = (genre) => {
    if (bookShelves.hasOwnProperty(genre)) {
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
                        />
        })
        return readingMaterial
    }
}

    return (
        <section className='bookgallery-container'>
            <article className='books-container'>
        <div>
            {/* <div className="movie-container-backdrop"></div> */}
                <div className='top-swiper-container'>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        speed={600}
                        parallax={true}
                        navigation={true}
                        modules={[Parallax, Navigation, Mousewheel, Keyboard]}
                        className="my-swiper"
                        slidesPerView={10}
                        slidesPerGroup={5}
                        spaceBetween={5}
                        cssMode={true}
                        mousewheel={true}
                        keyboard={true}
                        key={1}
                        >   
                        <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div> 
                        {getBooksByGenre("Combined Print and E-Book Fiction")} 
                    </Swiper>
                </div>

        {/* <div className='bottom-swiper-container'>
          <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          navigation={true}
          modules={[Parallax, Navigation, Mousewheel, Keyboard]}
          className="my-swiper2"
          slidesPerView={10}
          slidesPerGroup={5}
          spaceBetween={5}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          key={2}
          >   
            <div slot="container-start" className="parallax-bg2" data-swiper-parallax="-23%"></div> 
            {getBooksByGenre("Combined Print and E-Book Nonfiction")}  
          </Swiper>
        </div> */}
      </div>














            
            {/* <div className='genre-container'>Combined Print and E-Book Fiction:
                <Swiper 
                 speed={600}
                 parallax={true}
                 navigation={true}
                 modules={[Parallax, Navigation, Mousewheel, Keyboard]}
                 slidesPerView={10}
                 slidesPerGroup={5}
                 spaceBetween={5}
                 cssMode={true}
                 mousewheel={true}
                 keyboard={true}
                 key={1}
                className='genre-carousel'>
                    <SwiperSlide>{getBooksByGenre("Combined Print and E-Book Fiction")}</SwiperSlide>
                </Swiper>    
            </div>
            <Swiper navigation={true} modules={[Navigation]} className='genre-carousel'>
                <SwiperSlide>Combined Print and E-Book Nonfiction: {getBooksByGenre("Combined Print and E-Book Nonfiction")}</SwiperSlide>
            </Swiper> */}
            
            {/* <Swiper className='genre-carousel'>
                <SwiperSlide>Hardcover Fiction: {getBooksByGenre("Hardcover Fiction")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>
                <SwiperSlide>Trade Fiction Paperback: {getBooksByGenre("Trade Fiction Paperback")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>
                <SwiperSlide>Paperback Nonfiction: {getBooksByGenre("Paperback Nonfiction")}</SwiperSlide>
            </Swiper> */}

            {/* <Swiper className='genre-carousel'>
                <SwiperSlide>Advice How-To and Miscellaneous: {getBooksByGenre("Advice How-To and Miscellaneous")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>
                <SwiperSlide>Childrens Middle Grade Hardcover: {getBooksByGenre("Childrens Middle Grade Hardcover")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>
                <SwiperSlide>Picture Books: {getBooksByGenre("Picture Books")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>
                <SwiperSlide>Series Books: {getBooksByGenre("Series Books")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>
                <SwiperSlide>Young Adult Hardcover: {getBooksByGenre("Young Adult Hardcover")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>
                <SwiperSlide>Audio Fiction: {getBooksByGenre("Audio Fiction")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>
                <SwiperSlide>Audio Nonfiction: {getBooksByGenre("Audio Nonfiction")}</SwiperSlide>
            </Swiper> */}


            {/* <Swiper className='genre-carousel'>
                <SwiperSlide>Business Books: {getBooksByGenre("Business Books")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>
                <SwiperSlide>Graphic Books and Manga: {getBooksByGenre("Graphic Books and Manga")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>
                <SwiperSlide>Mass Market Monthly: {getBooksByGenre("Mass Market Monthly")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>
                <SwiperSlide>Middle Grade Paperback Monthly: {getBooksByGenre("Middle Grade Paperback Monthly")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>
                <SwiperSlide>Young Adult Paperback Monthly: {getBooksByGenre("Young Adult Paperback Monthly")}</SwiperSlide>
            </Swiper>
            <Swiper className='genre-carousel'>    
                <SwiperSlide>Hardcover Nonfiction: {getBooksByGenre("Hardcover Nonfiction")}</SwiperSlide>
            </Swiper> */}

            </article>
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