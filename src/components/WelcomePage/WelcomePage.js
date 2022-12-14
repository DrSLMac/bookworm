import React from 'react'
import { NavLink } from 'react-router-dom'
import './WelcomePage.css'
import background from '../../assets/bookshelves-and-plants.png'
import WelcomeHeader from './WelcomeHeader'

const WelcomePage = () => {
    return (
        <div className='welcome-page'>
            <div className="background-image" style={{ backgroundImage: `url(${background})`,
            backgroundSize:'cover',
            backgroundRepeat:"no-repeat",
            height:'125vh',
            }}>
                <WelcomeHeader />
                <div className="welcome-container">
                    <h1 className="welcome">Welcome!</h1>
                    <nav>
                        <NavLink to="/Dashboard" className="welcome-button">Click here to enter the book gallery</NavLink>
                    </nav>
           
                </div>
            </div>
        </div>
    )
}

export default WelcomePage