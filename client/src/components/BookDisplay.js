import React from "react";

const BookDisplay = (props) => {
    return (
        <div className="book-search">
            <form onSubmit={props.displayBook} action="">
                <button type="Submit">Search</button>
            </form>
        </div>
    );
}


export default BookDisplay;