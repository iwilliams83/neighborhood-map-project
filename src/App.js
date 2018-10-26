import React, { Component } from 'react';
import logo from './logo.svg';
import MapContainer from './MapContainer'
import LocationList from './LocationList'
import './App.css';


class App extends Component {
  state = {
    isClicked: false
  }
  render() {
    let classes = "list-div";
    classes += this.state.isClicked ? " list-div-bye" : "";

    return (
      <div className="App">
        <header className="App-header" onClick={() => this.setState((prevState) => ({isClicked: !prevState.isClicked}))}>
          Neighborhood Map Project
        </header>

        <div id="container">
          <div className={classes}>
            <LocationList />
          </div>
          <div className="map-div">
            <MapContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
