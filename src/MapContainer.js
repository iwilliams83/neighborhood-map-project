import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%'
};

// Source: https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react

export class MapContainer extends Component {

  state = {
    showInfoWindow: false,  // hide or show infoWindow
    activeMarker: {},       // shows active marker on click
    selectedPlace: {}       // show infoWindow for selected place
  };

  handleClick = (props, marker, e) => {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showInfoWindow: true
      })
  }


  onClose = props => {
     if (this.state.showInfoWindow) {
       this.setState({
         showInfoWindow: false,
         activeMarker: null
       })
     }
   }

  render() {
    const { positions } = this.props
    const address1  = this.state.selectedPlace.address1
    const address2  = this.state.selectedPlace.address2

    return (
        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{
           lat: 40.6939957,
           lng: -73.9942396
          }}
        >
        {positions && positions.map(pos => {
          return <Marker key={pos.id}
            position={pos.coordinates} name={pos.info.name}
            address1={pos.info.address1}
            address2={pos.info.address2}
            onClick={this.handleClick}
          />
        })}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <p>{address1 && address1}<br/>
              {address2 && address2}
            </p>
          </div>
        </InfoWindow>

        </Map>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyAFzHgk9cex507OuWCImdp0yykLbH23gew'
})(MapContainer);
