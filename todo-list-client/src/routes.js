import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { 
  Header 
} from "./components";

import {
  Login,
  Register,
  TodoListDashboard
} from './pages'
import { isAuthenticated } from "./utils";

export default function App() {
  return (
    <Router>
      <Header />
      <>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route exact path="/">
              {isAuthenticated() ? <Redirect to="/app" /> : <Redirect to="/login" />}
            </Route>
            <Route path="/register" component={Register} />
            <Route path="/app" component={TodoListDashboard}/>
        </Switch>
      </>
    </Router>
  );
}
