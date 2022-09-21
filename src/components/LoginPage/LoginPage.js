import React from 'react'
import './LoginPage.css'
import background from '../../assets/bookshelves-and-plants.png'
import LoginHeader from './LoginHeader'

const LoginPage = () => {
    return (
        <div>
        <div className='login-page' 
        style={{ backgroundImage: `url(${background})`,
        backgroundSize:'cover',
        backgroundRepeat:"no-repeat",
        height:'125vh',
    }}>
            <LoginHeader />
            {/* <h1>This is the Login Page</h1> */}
        </div>
        </div>
    )
}

export default LoginPage