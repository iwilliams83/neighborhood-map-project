import React, { Component } from 'react';
import logo from './logo.svg';
import MapContainer from './MapContainer'
import LocationList from './LocationList'
import './App.css';

// const listStyles = {
//   width: '50%',
//   height: '100%'
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Neighborhood Map Project
        </header>
        <div>
          <LocationList />
        </div>
        <div className="map-div">
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
