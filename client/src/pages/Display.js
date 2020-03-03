import React, { Component } from "react";
// import BookSearch from "../components/BookSearch";
import BookDisplayList from "../components/BookDisplayList";
import API from "../utils/API";
import BookDisplay from "../components/BookDisplay";

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {}
        }
    }

    displayBook = (event) => {
        event.preventDefault();
        API.display()
            .then(
                response => {
                    const bookObj = {};
                    bookObj.title = response.data[0].title;
                    bookObj.author = response.data[0].author;
                    bookObj.publishedDate = response.data[0].publishedDate;
                    bookObj.email = response.data[0].email;
                    bookObj.ISBN = response.data[0].ISBN;
                    bookObj.image = response.data[0].image;
                    bookObj.price = response.data[0].price;
                    this.setState({ book: bookObj });
                }
            )
    }

    handleDisplay = (book) => {
        this.setState({ book: book })
    }

    render() {
        return (
            <div>
                <BookDisplay displayBook={this.displayBook} />
                <BookDisplayList book={this.state.book} />
            </div>
        );
    }
}

export default Display;
