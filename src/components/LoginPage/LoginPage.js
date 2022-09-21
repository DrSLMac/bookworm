import React from 'react'
import './LoginPage.css'
import background from '../../assets/bookshelves-and-plants.png'
import LoginHeader from './LoginHeader'

const LoginPage = () => {
    return (
        <div className='login-page'>
            <div className="background-image" style={{ backgroundImage: `url(${background})`,
            backgroundSize:'cover',
            backgroundRepeat:"no-repeat",
            height:'125vh',
            }}>
                <LoginHeader />
                <div className="welcome-container">
                    <h1 className="welcome">Welcome!</h1>
                    <button>Click here to enter the book gallery</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage