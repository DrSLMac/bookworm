import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { fetchBookData } from '../../apiCalls'
import WelcomePage from '../WelcomePage/WelcomePage'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Dashboard from '../Dashboard/Dashboard'
import BookDetails from '../BookDetails/BookDetails'

class App extends Component {
  constructor() {
    super()
    this.state={
      bookLists: [],
      error: false,
    }
  }

  componentDidMount = () => {
    fetchBookData()
    .then((data) => {
      // console.log('App.js data.results.lists: ', data.results.lists)
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
            <Route exact path="/" render={() => <WelcomePage />} />
              <Route exact path="/Dashboard" render={() => <Dashboard bookLists={this.state.bookLists}/>} />
              <Route exact path="/BookDetails" render={() => <BookDetails />} />
          </main>
        </>
        }
      </>
    )
  }
}

export default App;
