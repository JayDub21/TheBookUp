import React from "react";

const BookCard = (props) => {
    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.image} className="card-img" alt="book" />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{props.title}</li>
                                <li className="list-group-item">{props.author}</li>
                                <li className="list-group-item">Published: {props.publishedDate}</li>
                                <li className="list-group-item">ISBN: {props.ISBN}</li>
                                <li className="list-group-item">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Condition</label>
                                        <select onChange={props.handleConditionChange} className="form-control" id="exampleFormControlSelect1">
                                            <option value="Good">Good</option>
                                            <option value="Like New">Like New</option>
                                            <option value="Poor">Poor</option>
                                        </select>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <input onChange={props.handlePriceChange} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">.00</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <input onChange={props.handleEmailChange} type="text" />
                                </li>

                                <button onClick={props.handleListingSubmit} type="Submit">Submit</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
