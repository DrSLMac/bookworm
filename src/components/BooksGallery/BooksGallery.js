import React from 'react'
import './BooksGallery.css'
import BookCard from '../BookCard/BookCard'

const BooksGallery = () => {
    return (
        <main className='bookgallery-container'>
            <h2 className="bookgallery-container-text">This is where all the books will go</h2>
            <BookCard />
        </main>
    )
}

export default BooksGallery