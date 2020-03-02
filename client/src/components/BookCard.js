import React from "react";
import API from "../utils/API"

const BookCard = (props) => {
    function handleListingSubmit(event) {
        event.preventDefault();
        API.listBook(props.title, props.author, props.publishedDate, props.ISBN).then(response => console.log(response.data))
    }

    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.image} className="card-img" alt="book image" />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">{props.title}</li>
                                <li class="list-group-item">{props.author}</li>
                                <li class="list-group-item">Published: {props.publishedDate}</li>
                                <li class="list-group-item">ISBN: {props.ISBN}</li>
                                <li class="list-group-item">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Condition</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Good</option>
                                            <option>Like New</option>
                                            <option>Poor</option>
                                        </select>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">$</span>
                                        </div>
                                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <div class="input-group-append">
                                            <span class="input-group-text">.00</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={handleListingSubmit} type="Submit">Search</button>
        </div>
    );
}

export default BookCard;
