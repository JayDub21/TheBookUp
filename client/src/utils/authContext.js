import React, { createContext, useReducer, useContext } from "react"

const AuthContext = createContext();
const { Provider } = AuthContext;


const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthentiated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthentiated: false,
                user: null
            };
        default:
            return state;
    }
};

const userState = {
    isAuthentiated: false,
    user: null,
    token: null
};

const AuthProvider = () => {
    const [state, dispatch] = useReducer(reducer, userState)
}



export default { AuthContext, reducer };