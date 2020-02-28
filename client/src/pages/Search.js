import React from "react";
function Search() {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend" id="button-addon3">
                <button className="btn btn-outline-secondary" type="button">Post</button>
                <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
            <input type="text" className="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3" />
        </div>
    );
}
export default Search;
