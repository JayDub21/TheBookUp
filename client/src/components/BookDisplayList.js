import React from "react";
import BookDisplayCard from "./BookDisplayCard"

const BookDisplayList = (props) => {
    console.log(props.books);
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookDisplayCard
                        key={i}
                        image={book.image}
                        title={book.title}
                        author={book.author}
                        ISBN={book.ISBN}
                        publishedDate={book.publishedDate}
                        email={book.email}
                        price={book.price}
                    />
                })
            }
        </div>
    );
}


export default BookDisplayList;
