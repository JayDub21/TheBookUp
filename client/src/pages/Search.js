import React from "react";
function Search() {
    return (
        <div class="input-group mb-3">
            <div class="input-group-prepend" id="button-addon3">
                <button class="btn btn-outline-secondary" type="button">Post</button>
                <button class="btn btn-outline-secondary" type="button">Search</button>
            </div>
            <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3" />
        </div>
    );
}
export default Search;
