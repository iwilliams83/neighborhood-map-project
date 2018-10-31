import React, { Component } from 'react';
import MapContainer from './MapContainer'
import LocationList from './LocationList'
import './App.css';
import menuIcon from './menu-icon.png'

const clientID = 'Q3OXIUKBYDMB2BAI1QPUHZSKLHTBZB4BRZ0AYOCZGIATKN4G'
const clientSecret = 'NUR2V3QHB2RBQSZIKA2OFYIEDLZVF0RJPW1UXCEZSAO4ECZV'
const categoryID = '4d4b7105d754a06374d81259'

const URL = `https://api.foursquare.com/v2/venues/search?client_id=${clientID}
              &client_secret=${clientSecret}&ll=40.6939951,-73.9942396&categoryId=${categoryID}&v=20181025&radius=250`

class App extends Component {
  state = {
    places: [],
    filtered: [],
    positions: [],
    isClicked: false
  }

  componentDidMount(){
    fetch(URL).then(data => data.json())
      .then(data => this.setState({places: data.response.venues}))
      .then(() => this.getPositions(this.state.places))
  }

  getPositions = (places) => {
    let positions = places.map(place => {
      return {
                id: place.id,
                coordinates: {lat: place.location.lat, lng: place.location.lng},
                info: {
                  name: place.name,
                  address1: place.location.address,
                  address2: place.location.formattedAddress[1]
                }
              }
    })

    this.setState({ positions })
  }

  handleFilter = (query) => {
    query = query.toLowerCase()

    let venues = [...this.state.places]

    let filtered = venues.filter(venue => {
      let name = venue.name.toLowerCase()
      if (name.includes(query)) return venue
    })

    this.setState({ filtered })
    this.getPositions(filtered)
  }

  render() {
    let classes = "list-div";
    classes += this.state.isClicked ? " hide-list" : "";

    const { places, positions, filtered } = this.state

    return (
      <div className="App">
        <aside className={classes}>
          <LocationList places={filtered.length > 0 ? filtered : places}
                          handleFilter={this.handleFilter}/>
        </aside>

        <div id="container">
          <div className="App-header"
            >
            <header >
              <img src={menuIcon} alt="menu icon"
                onClick={() => this.setState((prevState) => ({isClicked: !prevState.isClicked}))}/>
            </header>
          </div>

          <div className="map-div">
            <MapContainer positions={positions}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
