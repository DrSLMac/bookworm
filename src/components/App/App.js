import React, { Component } from 'react'
import './App.css'
import { fetchBookData } from '../../apiCalls'
// import WelcomePage from '../WelcomePage/WelcomePage'
import Header from '../Header/Header'
import BooksGallergy from '../BooksGallery/BooksGallery'
import NavBar from '../NavBar/NavBar'
import ErrorMessage from '../ErrorMessage/ErrorMessage'


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
      console.log(error)
      this.setState({ error: true })
    })
  }

  render() {
    return (
      <>
        {this.state.error ? <div><ErrorMessage /></div> : 
        <>
          <main>
            
            {/* <WelcomePage /> */}
            <Header />
            <div className='main-container'>
              <NavBar />
              <BooksGallergy />
            </div>

          </main>
        </>
        }
      </>
    )
  }
}

export default App;
