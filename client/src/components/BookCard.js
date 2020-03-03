import React from "react";

const BookCard = (props) => {
    // function handleListingSubmit(event) {
    //     event.preventDefault();
    //     console.log(props.image, props.title, props.author[0], props.publishedDate, props.ISBN)
    //     API.listBook(props.author[0], props.title, props.publishedDate, props.email, props.ISBN, props.image).then(response => console.log(response.data))
    // }

    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.image} className="card-img" alt="book image" />
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
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Good</option>
                                            <option>Like New</option>
                                            <option>Poor</option>
                                        </select>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">.00</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">atb5498@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <button onClick={handleListingSubmit} type="Submit">Search</button> */}
        </div>
    );
}

export default BookCard;
