import axios from "axios";

export default {

    login: (email, password) => {
        return axios.post("/api/auth/login", { email, password });
    },

    logout: () => {
        return axios.get("/api/auth/logout");
    },

    signup: (email, password) => {
        return axios.post("/api/auth/signup", { email, password });
    },

    listBook: (image, title, author, publishedDate, ISBN, email) => {
        return axios.post("/api/listing/", { author, title, publishedDate, ISBN, image, email })
    }
};

// }

// Save a user to database
//     saveUser: function (userData) {
//         return axios.post("/api/users", userData);
//     },
//     getUser: function () {
//         console.log(axios.get("/api/users"));
//     }
