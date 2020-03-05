import React from "react";
import "./BookDisplayCard.css"

const BookDisplayCard = (props) => {
    return (
        <div className="card mb-3 mx-auto" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.image} className="card-img d-block mx-auto" alt="book" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li id="card-title" className="list-group-item">{props.title}</li>
                            <li className="list-group-item">{props.author}</li>
                            {/* <li className="list-group-item">Published {props.publishedDate}</li> */}
                            <li className="list-group-item">ISBN {props.ISBN}</li>
                            <li className="user-input list-group-item">
                                <select onChange={props.handleConditionChange} className="custom-select" id="inputGroupSelect01">
                                    <option value="">Select Condition</option>
                                    <option value="Good">Good</option>
                                    <option value="Like New">Like New</option>
                                    <option value="Poor">Poor</option>
                                </select>
                            </li>
                            <li className="user-input list-group-item">
                                <input id="price-input" onChange={props.handlePriceChange} placeholder="Enter Price" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                            </li>
                            <li className="user-input list-group-item">
                                <input id="contact-input" onChange={props.handleEmailChange} type="text" className="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        // <div className="card-container">
        //     <img src={props.image} alt="" />
        //     <h1>{props.title}</h1>
        //     <br></br>
        //     <h2>By {props.author}</h2>
        //     <br></br>
        //     <h2>Published {props.publishedDate}</h2>
        //     <br></br>
        //     <h2>ISBN: {props.ISBN}</h2>
        //     <br></br>
        //     <h2>Seller Email: {props.email}</h2>
        //     <br></br>
        //     <h2>Ask Price: ${props.price}</h2>
        // </div>
    );
}


export default BookDisplayCard;
