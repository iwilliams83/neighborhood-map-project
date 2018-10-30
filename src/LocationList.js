import React, { Component } from 'react'

class LocationList extends Component {
  state = {
    query: ''
  }

  handleChange = (e) => {
    let query = e.target.value
    this.setState({ query })
  }

  

  render(){
    const { places } = this.props
    return <div>
            <form onSubmit={this.handleFilter}>
              <div className="filter-field">
                <input className="input-field"
                  value={this.state.query} onChange={this.handleChange}/>
                <div id="filter">Filter</div>
              </div>
            </form>
            <div className="place-container">
              {places && places.map(place => {
                return <div key={place.id} className="place">
                          {place.name}
                        </div>
              })}
            </div>

          </div>
  }
}

export default LocationList
