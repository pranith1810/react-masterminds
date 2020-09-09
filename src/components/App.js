import React from 'react';
import Header from './Header.js';
import GameComponent from './GameComponent.js';
import About from './About.js';
import HomeComponent from './HomeComponent.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className='whole-container'>
      <Header />
      <Router>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/play'>
            <GameComponent />
          </Route>
          <Route path='/'>
            <HomeComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


