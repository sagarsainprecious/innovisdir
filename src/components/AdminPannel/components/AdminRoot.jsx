import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout/Layout";

// pages
import Error from "../pages/error/Error";
import Login from "../pages/login/Login";
import Header from "../../Header/Header";

// context

export default function AdminRoot() {
  // global
  return (
    <div>
      
    </div>
    // <HashRouter>
    //   <Switch>
    //     {/* <Route exact path="/admin" render={() => <Redirect to="/app/dashboard" />} /> */}
    //     {/* <Route
    //       exact
    //       path="/app"
    //       render={() => <Redirect to="/app/dashboard" />}
    //     /> */}
    //      <Route path="/" component={Header} />
    //     <Route path="/admin" component={Layout} />
    //     <Route path="/login" component={Login} />
    //     <Route component={Error} />
    //   </Switch>
    // </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
