import React, { Component } from 'react';
import logo from './logo.svg';
import MapContainer from './MapContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Neighborhood Map Project
        </header>
        <div>
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
