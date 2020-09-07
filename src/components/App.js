import React from 'react';
import Header from './Header.js';
import GameComponent from './GameComponent.js';
import '../styles/App.css';

function App() {
  return (
    <div className = 'whole-container'>
      <Header />
      <GameComponent />
    </div>
  );
}

export default App;
