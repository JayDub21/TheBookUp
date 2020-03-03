import React from "react";
import BookDisplayCard from "./BookDisplayCard"

const BookDisplayList = (props) => {
    console.log(Object.entries(props))
    console.log(props.book);
    return (
        <div className="list">
            <BookDisplayCard
                key={1}
                image={props.book.image}
                title={props.book.title}
                author={props.book.author}
                publishedDate={props.book.publishedDate}
                email={props.book.email}
                ISBN={props.book.ISBN}
                price={props.book.price}
            />
        </div>
    );
}


export default BookDisplayList;
