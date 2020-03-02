import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "./Form";
import API from "../utils/API";

import axios from "axios";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Creating a login function to appear in the UI
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //seting private info
    const [privateInfo, setPrivateInfo] = useState({});


    function handleLoginSubmit(event) {
        event.preventDefault();
        API.login(email, password).then(response => {
            setIsLoggedIn(true);
            axios.get("/api/user/dashboard").then(response => {
                setPrivateInfo({ secret: response.data })
            })
        })
        // axios.post("/api/auth/login", { email, password }).then(response => {
        //     axios.get("/api/user/dashboard").then(response => {
        //         setPrivateInfo({ secret: response.data })
        //     })
        //     setIsLoggedIn(true);
        // });
    }

    function handleLogoutSubmit(event) {
        event.preventDefault();
        API.logout().then(response => {
            setIsLoggedIn(false);
        })
        // axios.get("/api/auth/logout").then(response => {
        //     setIsLoggedIn(false);
        // });
    }

    function renderPrivateSection() {
        if (isLoggedIn) {
            return ((
                <div>
                    <h1>{privateInfo.secret}</h1>
                </div>
            ))
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login Form</h2>
                    <form className="login">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <Input value={email} onChange={(event) => { setEmail(event.target.value) }} type="email" id="email-input" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <Input value={password} onChange={(event) => { setPassword(event.target.value) }} type="password" id="password-input" placeholder="Password" />
                        </div>
                        <FormBtn type="submit" onClick={handleLoginSubmit}>Login</FormBtn>
                        <FormBtn type="submit" onClick={handleLogoutSubmit}>Sign Out</FormBtn>
                    </form>
                    <br />
                    <p>Or sign up <Link to="/signup" className="/signup">here</Link></p>
                </div>
            </div>

            {/* Testing out a small a dashboard div to appear when use signs in */}
            <div>
                {
                    renderPrivateSection()
                }
            </div>
        </div>
    )
}

export default LoginForm