import { Component } from 'react'
import { fetchBookDetails } from '../../apiCalls'
import './BookDetails.css'
//need home button
//need back to search button
//need functions to fetch data

class BookDetails extends Component {
    constructor({ id, title, author, book_image, description, list_name }) {
        super()
        this.state = {
            id: id,
            title: title,
            author: author,
            bookCover: book_image,
            description: description,
            genre: list_name
        }
    }

    componentDidMount() {
        fetchBookDetails()
        .then((data) => {
            console.log('bookDetails: ', data)
            this.setState({ 
                id: data.id,
            })
        })
    }
}

export default BookDetails