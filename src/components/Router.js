import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <div>
    <Router>
      <Navigation userObj={userObj} isLoggedIn={isLoggedIn}/>
      <Switch>
        {true ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} isLoggedIn={isLoggedIn} />
            </Route>
            <Route exact path="/Profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
            <Redirect from="*" to="/" />
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router></div>
  );
};

export default AppRouter;
