import React from "react";

const BookSearch = (props) => {
    return (
        <div className="book-search">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} id="isbn-input" type="text" />
                <button type="Submit">Search</button>
            </form>
        </div>
    );
}

export default BookSearch;
