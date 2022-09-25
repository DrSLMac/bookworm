import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
    constructor({filteredBooks}) {
        super()
        this.state={
            genre: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
        console.log('value: ', value)
        this.props.filteredBooks(value)
    }


    render() {
        return (
            <form>
                <select 
                    name='genre'
                    placeholder='genre'
                    value={this.state.genre}
                    onChange={this.handleChange}
                >
                    <option value=""> Choose Your Genre</option>
                    <option value="Combined Print and E-Book Fiction">Combined Print and E-Book Fiction</option>
                    <option value="Hardcover Fiction">Hardcover Fiction</option>
                    <option value="Hardcover Nonfiction">Hardcover Nonfiction</option>
                </select>
            </form>
        )
    }
}

export default Form

// Combined Print and E-Book Fiction
// Combined Print and E-Book Nonfiction
// Hardcover Fiction
// Hardcover Nonfiction
// Trade Fiction Paperback
// Paperback Nonfiction
// Advice How-To and Miscellaneous
// Childrens Middle Grade Hardcover
// Picture Books
// Series Books
// Young Adult Hardcover
// Audio Fiction
// Audio Nonfiction
// Business Books
// Graphic Books and Manga
// Mass Market Monthly
// Middle Grade Paperback Monthly
// Young Adult Paperback Monthly