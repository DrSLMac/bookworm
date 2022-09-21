import React, { Component } from 'react'
import './App.css'
// import BooksGallery from '../BooksGallery/BooksGallery'
// import Header from '../Header/Header'
import { fetchBookData } from '../../apiCalls'
// import WelcomePage from '../WelcomePage/WelcomePage'
// import Dashboard from '../Dashboard/Dashboard'
import Header from '../Header/Header'
import BooksGallergy from '../BooksGallery/BooksGallery'
import NavBar from '../NavBar/NavBar'

class App extends Component {
  constructor() {
    super()
    this.state={
      bookLists: [],
      error: false
    }
  }

  componentDidMount = () => {
    fetchBookData()
    .then((data) => {
      console.log('data.results.lists: ', data.results.lists)
      this.setState({ bookLists: data.results.lists })
    })
    .catch((error) => {
      
    })
  }

  render() {
    return (
      <main>
        
        {/* <WelcomePage /> */}
        <Header />
        <NavBar />
        <BooksGallergy />

      </main>
    )
  }
}

export default App;
