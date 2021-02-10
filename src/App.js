import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Build from './views/Build';
import View from './views/View';
import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <nav>
              <ul>
                <li>
                  <Link to="/">Build</Link>
                </li>
                <li>
                  <Link to="/view">View</Link>
                </li>
              </ul>
            </nav>
          <Switch>
            <Route path="/view">
              <View />
            </Route>
            <Route path="/">
              <Build />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
