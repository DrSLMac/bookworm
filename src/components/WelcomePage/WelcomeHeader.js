import React from 'react'
import './WelcomeHeader.css'
import bookworm from '../../assets/bookworm.png'


const WelcomeHeader = () => {
    return (
            <section className="header-container">
                <img className='bookworm-img' src={bookworm} alt='bookworm cartoon'/>
                    <h1 className="title">BOOKWORM</h1>
            </section>
    )
}

export default WelcomeHeader