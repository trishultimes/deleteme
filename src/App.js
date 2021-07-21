
import './App.css';
import Userform from './components/Userform';
import Userlist from './components/Userlist';
import Messages from './components/Messages';

import React from "react";
// function App() {
//   // return (
//   //   
//   // );



// }
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/users">
            <Userlist />
          </Route>
          <Route path="/">
            <Userform />
          </Route>
        </Switch>
      </div>
  
    </Router>
  );
}


