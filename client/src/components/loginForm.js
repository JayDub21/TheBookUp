import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "./Form";

import axios from "axios";

function LoginForm() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    function handleFormSubmit(event) {
        event.preventDefault();
        axios.post("/api/login", {email, password}).then(response => console.log(response.data));
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login Form</h2>
                    <form className="login">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <Input value={email} onChange={(event) => {setEmail(event.target.value)}} type="email" id="email-input" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <Input value={password} onChange={(event) => {setPassword(event.target.value)}} type="password" id="password-input" placeholder="Password" />
                        </div>
                        <FormBtn type="submit" onClick={handleFormSubmit}>Login</FormBtn>
                    </form>
                    <br />
                    <p>Or sign up <Link to="/signup" className="/signup">here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm