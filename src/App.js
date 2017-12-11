import "./App.css";

import React          from "react";
import { Component }  from "react";

import { BrowserRouter as Router }  from "react-router-dom";
import { Switch }                   from "react-router-dom";
import { Route }                    from "react-router-dom";
import { Link }                     from "react-router-dom";

import Home       from "./Home";
import Dashboard  from "./Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/dashboard"}>Dashboard</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
