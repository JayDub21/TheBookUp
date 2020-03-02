import React from "react";

const BookCard = (props) => {
    return (
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className="book-info">
                <h1>{props.title}</h1>
                <h2>{props.author}</h2>
            </div>
        </div>
    );
}


export default BookCard;
