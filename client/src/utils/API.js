import axios from "axios";

export default {
    //Save a user to database
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    }
}