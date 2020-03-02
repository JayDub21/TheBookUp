import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Post from "./pages/Post";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/post">
          <Post />
        </Route>
      </Router>

    );
  }
}

export default App;
