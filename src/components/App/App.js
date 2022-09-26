import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { fetchBookData } from '../../apiCalls'
import WelcomePage from '../WelcomePage/WelcomePage'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Dashboard from '../Dashboard/Dashboard'
// import BookDetails from '../BookDetails/BookDetails'
import SavedBooksContainer from '../SavedBooksContainer/SavedBooksContainer'

class App extends Component {
  constructor() {
    super()
    this.state={
      bookLists: [],
      filteredBookLists: [],
      savedBooks: [],
      error: false,
    }
  }

  componentDidMount = () => {
    fetchBookData()
    .then((data) => {
      console.log('App.js data.results.lists: ', data.results.lists)
      this.setState({ bookLists: data.results.lists })
    })
    .catch((error) => {
      console.log(error)
      this.setState({ error: true })
    })
  }

  filteredBooks = (genre) => {
    const filtered = this.state.bookLists.filter(bookList => {
      return bookList.list_name === genre
    })
      this.setState({ filteredBookLists: filtered })
      console.log('this.state.filteredBookList: ', this.state.filteredBookLists)
  }

  saveBook = (uri) => {
    const allBooks = this.state.bookLists.map(bookList => bookList.books).flat()
      const foundBook = allBooks.find(book => book.book_uri === uri)
      console.log('foundBook: ', foundBook)
      this.setState({savedBooks: [...this.state.savedBooks, foundBook]})
  }

  render() {
    return (
      <>
        {this.state.error ? <div><ErrorMessage /></div> : 
        <>
          <nav>
                <Route exact path="/" render={() => <WelcomePage />} />

                <Route exact path="/Dashboard" render={() => <Dashboard 
                  bookLists={this.state.bookLists} 
                  filteredBooks={this.filteredBooks}
                  filteredBookLists={this.state.filteredBookLists}
                  saveBook={this.saveBook}
                  />} />

                <Route exact path="/SavedBooksSection" render={() => <SavedBooksContainer 
                savedBooks={this.state.savedBooks}
                filteredBooks={this.filteredBooks}
                filteredBookLists={this.state.filteredBookLists}/>} />
          </nav>
        </>
        }
      </>
    )
  }
}

export default App;
