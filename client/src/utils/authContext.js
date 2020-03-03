import React from "react"

const AuthContext = React.createContext({
    isAuthentiated: false,
    user: null,
    token: null
});

export default AuthContext;