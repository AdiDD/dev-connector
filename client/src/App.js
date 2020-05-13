import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import PrivateRoute from "./components/routing/PrivateRoute.components";
import Navbar from "./components/layout/Navbar.component";
import Landing from "./components/layout/Landing.component";
import Login from "./components/auth/Login.component";
import Register from "./components/auth/Register.component";
import Dashboard from "./components/dashboard/Dashboard.component";
import Alert from "./components/layout/Alert.component";
import CreateProfile from "./components/profile-forms/CreateProfile.component";

import store from "./store";
import { loadUser } from "./actions/auth.actions";

import "./App.css";

// if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
