import React from "react";
import BookCard from "./BookCard"

const BookList = (props) => {
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.title}
                        author={book.authors} />
                })
            }
        </div>
    );
}


export default BookList;
