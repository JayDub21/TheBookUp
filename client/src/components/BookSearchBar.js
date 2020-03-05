import React from "react";

const BookSearchBar = (props) => {
    console.log("Component mounted")
    return (
        <div className="search-form">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <form className="forms" onSubmit={props.searchTitle} action="">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Title</span>
                                </div>
                                <input onChange={props.handleSearch} type="text" class="form-control" aria-label="Title" aria-describedby="basic-addon1" />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <form className="forms" onSubmit={props.searchAuthor} action="">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Author</span>
                                </div>
                                <input onChange={props.handleSearch} type="text" class="form-control" aria-label="Author" aria-describedby="basic-addon1" />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">ISBN</span>
                            </div>
                            <input type="text" class="form-control" aria-label="ISBN" aria-describedby="basic-addon1" />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <form className="forms" onSubmit={props.searchISBN} action="">
                <input onChange={props.handleSearch} placeholder="Search by ISBN" type="text" />
                <button type="Submit">Search</button>
            </form>
        </div>
    )
}

export default BookSearchBar