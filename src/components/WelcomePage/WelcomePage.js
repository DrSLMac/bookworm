import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import './WelcomePage.css'
import background from '../../assets/bookshelves-and-plants.png'
import WelcomeHeader from './WelcomeHeader'
import Dashboard from '../Dashboard/Dashboard'

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
                    {/* <Route path="/Dashboard" component={Dashboard} /> */}
                    {/* <button>Click here to enter the book gallery</button> */}
                </div>
            </div>
        </div>
    )
}

export default WelcomePage