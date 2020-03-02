import axios from "axios";
require("dotenv").config()

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = `&api_key=${process.env.GoogleKey}`;

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};
