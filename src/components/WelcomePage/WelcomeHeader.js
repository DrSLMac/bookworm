import React from 'react'
import './WelcomeHeader.css'
import bookworm from '../../assets/bookworm.png'


const WelcomeHeader = () => {
    return (
            <section className="welcome-header-container">
                <img className='welcome-bookworm-img' src={bookworm} alt='bookworm cartoon'/>
                    <h1 className="welcome-title">BOOKWORM</h1>
            </section>
    )
}

export default WelcomeHeader