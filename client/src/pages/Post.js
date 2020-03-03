import React, { Component } from "react";
import BookSearch from "../components/BookSearch";
import request from "superagent";
import BookList from "../components/BookList"
import API from "../utils/API"

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: "",
            condition: "Good",
            price: "",
            email: ""
        }
    }

    searchBook = (event) => {
        event.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + this.state.searchField)
            .then((data) => {
                this.setState({ books: [...data.body.items] })
            })
    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value })
    }

    handleInputChange = (event) => {
        this.setState({
            condition: event.target.value,
            price: event.target.value,
            email: event.target.value
        })
    }

    handleListingSubmit = (event) => {
        event.preventDefault();

        const image = this.state.books[0].volumeInfo.imageLinks.thumbnail;
        const title = this.state.books[0].volumeInfo.title;
        const author = this.state.books[0].volumeInfo.authors[0];
        const publishedDate = this.state.books[0].volumeInfo.publishedDate;
        const ISBN = this.state.books[0].volumeInfo.industryIdentifiers[0].identifier;
        const condition = this.state.condition;
        const price = this.state.price;
        const email = this.state.email;

        API.listBook(image, title, author, publishedDate, ISBN, condition, price, email).then(response => console.log(response.data))
    }

    render() {
        return (
            <div>
                <BookSearch searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <BookList books={this.state.books} handleSearch={this.handleSearch} handleInputChange={this.handleInputChange} />
                <button onClick={this.handleListingSubmit} type="Submit">Submit</button>
            </div>
        );
    }
}

export default Post;
