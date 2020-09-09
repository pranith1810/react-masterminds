import React from 'react';
import Header from './Header.js';
import GameComponent from './GameComponent.js';
import About from './About.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <div className='whole-container'>
      <Header />
      <Router>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <GameComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


