import React, { Component } from "react";
import BookSearch from "../components/BookSearch";
import request from "superagent";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: [],
            searchField: ""
        }
    }

    searchBook = (event) => {
        event.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                console.log(data)
            })
    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        return (
            <BookSearch searchBook={this.searchBook} handleSearch={this.handleSearch} />
        );
    }
}

export default Post;
