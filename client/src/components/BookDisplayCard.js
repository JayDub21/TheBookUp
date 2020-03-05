import React from "react";
import "./BookDisplayCard.css"

const BookDisplayCard = (props) => {
    return (
        <div className="card-container">
            <img src={props.image} alt="" />
            <h1>{props.title}</h1>
            <br></br>
            <h2>By {props.author}</h2>
            <br></br>
            <h2>Published {props.publishedDate}</h2>
            <br></br>
            <h2>ISBN: {props.ISBN}</h2>
            <br></br>
            <h2>Seller Email: {props.email}</h2>
            <br></br>
            <h2>Ask Price: ${props.price}</h2>
        </div>
    );
}


export default BookDisplayCard;
