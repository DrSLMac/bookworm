import React from 'react'
import './AllBooksContainer.css'
import BookCard from '../BookCard/BookCard'

const AllBooksContainer = () => {
    return (
        <main className='main-container'>
            <h2 className="main-container-text">This is where all the books will go</h2>
            <BookCard />
        </main>
    )
}

export default AllBooksContainer