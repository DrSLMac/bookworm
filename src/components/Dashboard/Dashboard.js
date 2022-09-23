import React from 'react'
import './Dashboard.css'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import BookGallery from '../BookGallery/BookGallery'

const Dashboard = ({bookLists}) => {
    return (
        <div>
            <Header />
            <div className="dashboard-view">
              
                    <NavBar />
             
                    <BookGallery bookLists={bookLists} />
               
            </div>
        </div>
    )
}

export default Dashboard