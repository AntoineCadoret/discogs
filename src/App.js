import React, { Component } from 'react';
import Vinyle from './components/Vinyle';
import './App.css';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <h1>Discogs</h1>
        <Vinyle />
      </div>
    );
  }
}

export default App;
