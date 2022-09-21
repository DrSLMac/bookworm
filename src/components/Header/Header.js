import React from 'react'
import './Header.css'
import bookworm from '../../assets/bookworm.png'
import bookshelf from '../../assets/vintage-bookshelf-no-background.png'

const Header = () => {
    return (
        <section className="dashboard-header-container">
            <img className='bookworm-img' src={bookworm} alt='bookworm cartoon'/>
            <h1 className="title">BOOKWORM</h1>
            <img className='bookshelf-img' src={bookshelf} alt='vintage bookshelf with books' />
        </section>
    )
}

export default Header