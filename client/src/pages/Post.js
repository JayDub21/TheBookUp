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
            searchField: ""
        }
    }

    searchBook = (event) => {
        event.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + this.state.searchField)
            .then((data) => {
                console.log(data)
                this.setState({ books: [...data.body.items] })
            })
    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value })
    }

    handleListingSubmit = (event) => {
        event.preventDefault();

        const image = this.state.books[0].volumeInfo.imageLinks.thumbnail;
        const title = this.state.books[0].volumeInfo.title;
        const author = this.state.books[0].volumeInfo.authors[0];
        const publishedDate = this.state.books[0].volumeInfo.publishedDate;
        const ISBN = this.state.books[0].volumeInfo.industryIdentifiers[0].identifier;
        const email = "atb5498@gmail.com";

        API.listBook(image, title, author, publishedDate, ISBN, email).then(response => console.log(response.data))
    }

    render() {
        return (
            <div>
                <BookSearch searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <BookList books={this.state.books} handleSearch={this.handleSearch} />
                <button onClick={this.handleListingSubmit} type="Submit">Submit</button>
            </div>
        );
    }
}

export default Post;
