import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/Main'
import WebRTC from './components/WebRTC'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/webrtc">webrtc</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/webrtc">
            <WebRTC />
          </Route>

          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

