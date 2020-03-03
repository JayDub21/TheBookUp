import React from "react";

const BookDisplayCard = (props) => {
    return (
        <div className="card-container">
            <img src={props.image} alt="" />
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <h2>{props.publishedDate}</h2>
            <h2>{props.email}</h2>
            <h2>{props.ISBN}</h2>
            <h2>Ask Price: ${props.price}</h2>
        </div>
    );
}


export default BookDisplayCard;
