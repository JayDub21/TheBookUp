import React, { Component } from "react";
import BookSearch from "../components/BookSearch";
import request from "superagent";
import BookList from "../components/BookList"

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

    render() {
        return (
            <div>
                <BookSearch searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <BookList books={this.state.books} />
            </div>
        );
    }
}

export default Post;
