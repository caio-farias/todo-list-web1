import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { 
  Header 
} from "./components";

import {
  Login,
  Register,
  TodoListDashboard
} from './pages'

export default function App() {
  return (
    <Router>
      <Header />
      <>
        <Switch>
          <Route exact from="/" to='/login' component={Login}/>
          <Route path="/register" component={Register} />
          <Route path="/app" component={TodoListDashboard} />
        </Switch>
      </>
    </Router>
  );
}
