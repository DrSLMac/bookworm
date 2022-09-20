import React, { Component } from 'react'
import './App.css'
// import Header from '../Header/Header'
import { fetchBookData } from '../../apiCalls'

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
      <h1>Hello World</h1>
    )
  }
}

export default App;
