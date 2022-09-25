import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
    constructor({}) {
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
                    <option disabled value=""> Choose Your Genre</option>
                    <option value="Combined Print and E-Book Fiction">Combined Print and E-Book Fiction</option>
                    <option value="Combined Print and E-Book Nonfiction">Combined Print and E-Book Nonfiction</option>
                    <option value="Hardcover Fiction">Hardcover Fiction</option>
                    <option value="Hardcover Nonfiction">Hardcover Nonfiction</option>
                    <option value="Trade Fiction Paperback">Trade Fiction Paperback</option>
                    <option value="Paperback Nonfiction">Paperback Nonfiction</option>
                    <option value="Advice How-To and Miscellaneous">Advice How-To and Miscellaneous</option>
                    <option value="Childrens Middle Grade Hardcover">Childrens Middle Grade Hardcover</option>
                    <option value="Picture Books">Picture Books</option>
                    <option value="Series Books">Series Books</option>
                    <option value="Young Adult Hardcover">Young Adult Hardcover</option>
                    <option value="Audio Fiction">Audio Fiction</option>
                    <option value="Audio Nonfiction">Audio Nonfiction</option>
                    <option value="Business Books">Business Books</option>
                    <option value="Graphic Books and Manga">Graphic Books and Manga</option>
                    <option value="Mass Market Monthly">Mass Market Monthly</option>
                    <option value="Middle Grade Paperback Monthly">Middle Grade Paperback Monthly</option>
                    <option value="Young Adult Paperback Monthly">Young Adult Paperback Monthly</option>

                </select>
            </form>
        )
    }
}

export default Form





