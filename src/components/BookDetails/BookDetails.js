import { Component } from 'react'
import { fetchBookDetails } from '../../apiCalls'
import './BookDetails.css'
import PropTypes from 'prop-types';

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

BookDetails.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    book_image: PropTypes.string,
    description: PropTypes.string,
    list_name: PropTypes.string
}