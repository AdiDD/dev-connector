import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar.component";
import Landing from "./components/layout/Landing.component";
import Login from "./components/auth/Login.component";
import Register from "./components/auth/Register.component";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
