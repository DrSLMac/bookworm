import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { fetchBookData } from '../../apiCalls'
import WelcomePage from '../WelcomePage/WelcomePage'
// import Header from '../Header/Header'
// import BooksGallergy from '../BooksGallery/BooksGallery'
// import NavBar from '../NavBar/NavBar'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Dashboard from '../Dashboard/Dashboard'


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


            <Route exact path="/" component={WelcomePage} />
              <Route exact path="/Dashboard" render={() => <Dashboard bookLists={this.state.bookLists}/>} />
            {/* <nav>
              <NavLink to="/">
                <article className="side-panel">
                  <h2>Search</h2>
                </article>
              </NavLink>
            </nav> */}
            {/* <Route path='/' component={WelcomePage}>
              <Route path='dashboard' component={Dashboard} />
            </Route> */}
            {/* <Header /> */}
            {/* <div className='main-container'>
              <NavBar bookLists={this.state} />
              <BooksGallergy bookLists={this.state.bookLists} error={this.state.error}/>
            </div> */}

          </main>
        </>
        }
      </>
    )
  }
}

export default App;
