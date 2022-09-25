import React from 'react'
import './Dashboard.css'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import BookGallery from '../BookGallery/BookGallery'

const Dashboard = ({bookLists, filteredBookLists, filteredBooks, saveBook }) => {
    // console.log('saveBook: ', saveBook)
    console.log('filtered books in dashboard: ', filteredBookLists)
    return (
        <div>
            <Header />
            <div className="dashboard-view">
                    <NavBar bookLists={bookLists} filteredBooks={filteredBooks}/>
                    <BookGallery 
                        bookLists={bookLists} 
                        filteredBookLists={filteredBookLists}
                        saveBook={saveBook}/>
               
            </div>
        </div>
    )
}

export default Dashboard