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
    }
<<<<<<< HEAD
};
=======

}

//Save a user to database
//     saveUser: function (userData) {
//         return axios.post("/api/users", userData);
//     },
//     getUser: function () {
//         console.log(axios.get("/api/users"));
//     }
>>>>>>> dev
