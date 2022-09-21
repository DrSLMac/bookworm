import React from 'react'
import './LoginHeader.css'
// import bookworm from '../../assets/bookworm.png'

const LoginHeader = () => {
    return (
            <section className="header-container">
                {/* <div className='bookworm-img'>
                    <img  src={bookworm} />
                </div> */}
                <div>
                    <h1 className="title">BOOKWORM</h1>
                </div>
            </section>
    )
}

export default LoginHeader