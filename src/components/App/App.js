import React, { Component } from 'react'
import './App.css'
// import BooksGallery from '../BooksGallery/BooksGallery'
// import Header from '../Header/Header'
import { fetchBookData } from '../../apiCalls'
import LoginPage from '../LoginPage/LoginPage'

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
      <div>
        <LoginPage />
        {/* <Header />
        <BooksGallery /> */}

      </div>
    )
  }
}

export default App;
