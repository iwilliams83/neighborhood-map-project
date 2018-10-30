import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%'
};

// Source: https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react

export class MapContainer extends Component {
  render() {
    const { positions } = this.props

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
          return <Marker key={pos.id} position={pos.coordinates}/>
        })}

        </Map>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyAFzHgk9cex507OuWCImdp0yykLbH23gew'
})(MapContainer);
