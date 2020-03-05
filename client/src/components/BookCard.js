import React from "react";

const BookCard = (props) => {
    return (
        <div>
            <div className="card mb-3 mx-auto" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.image} className="card-img" alt="book" />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{props.title}</li>
                                <li className="list-group-item">{props.author}</li>
                                <li className="list-group-item">Published {props.publishedDate}</li>
                                <li className="list-group-item">ISBN: {props.ISBN}</li>
                            </ul>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" hmtlfor="inputGroupSelect01">Condition</label>
                                </div>
                                <select onChange={props.handleConditionChange} className="custom-select" id="inputGroupSelect01">
                                    <option value="Good">Good</option>
                                    <option value="Like New">Like New</option>
                                    <option value="Poor">Poor</option>
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input id="price-input" onChange={props.handlePriceChange} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                <div className="input-group-append">
                                    <span className="input-group-text">.00</span>
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <input id="email-input" onChange={props.handleEmailChange} type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                                <div class="input-group-append">
                                    <button onClick={props.handleListingSubmit} class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
