import React, { Component, useEffect } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Post from "./pages/Post";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Route exact path="/">
//           <Login />
//         </Route>
//         <Route exact path="/signup">
//           <SignUp />
//         </Route>
//         <Route exact path="/post">
//           <Post />
//         </Route>
//       </Router>

//     );
//   }
import Search from "./pages/Search";
import "./App.css";

import axios from "axios";
function App() {
  useEffect(() => {
    axios.get("/api/hello").then(result => {
      console.log(result.data);
    })
  }, [])

  return (
    <Router>
      <NavBar />
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
    </Router>
  );
}

export default App;
