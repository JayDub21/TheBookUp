import React from "react";
import BookDisplayCard from "./BookDisplayCard"

const BookDisplayList = (props) => {
    return (
        <div className="list">
            <BookDisplayCard
                key={1}
                image={props.image}
                title={props.title}
                author={props.author}
                publishedDate={props.publishedDate}
                email={props.email}
                ISBN={props.ISBN}
                price={props.price}
            />
        </div>
    );
}


export default BookDisplayList;
