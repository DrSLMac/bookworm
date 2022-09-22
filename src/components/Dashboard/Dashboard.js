import React from 'react'
import './Dashboard.css'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import BooksGallery from '../BooksGallery/BooksGallery'

const Dashboard = ({bookLists}) => {
    return (
        <div>
            <Header />
            <div className="dashboard-view">
              
                    <NavBar />
             
                    <BooksGallery bookLists={bookLists} />
               
            </div>
        </div>
    )
}

export default Dashboard