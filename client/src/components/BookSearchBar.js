import React from "react";

const BookSearchBar = (props) => {
    console.log("Component mounted")
    return (
        <div>
            <form onSubmit={props.searchAuthor} action="">
                <input onChange={props.handleSearch} placeholder="Search by author" type="text" />
                <button type="Submit">Search</button>
            </form>
            <form onSubmit={props.searchTitle} action="">
                <input onChange={props.handleSearch} placeholder="Search by title" type="text" />
                <button type="Submit">Search</button>
            </form>
            <form onSubmit={props.searchISBN} action="">
                <input onChange={props.handleSearch} placeholder="Search by ISBN" type="text" />
                <button type="Submit">Search</button>
            </form>

        </div>
    )
}

export default BookSearchBar