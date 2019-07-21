import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import { getTotalUniqueUsersApi } from '../api/geoLocationApi'

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: -41.293699,
      lng: 174.775497,
      zoom: 16,
      markers: [],
      uniqueUsers: null,
      maxZoom: 19,
    }
  }

  componentDidMount() {
    getTotalUniqueUsersApi()
      .then(data => {
        this.setState({ uniqueUsers: data })
      })
  }

  addMarker = (e) => {
    const { markers } = this.state
    markers.push(e.latlng)
    this.setState({ markers })
    console.log(markers);
}

render() {
  const position = [this.state.lat, this.state.lng];
  return (
    <LeafletMap className="map-margin" center={position} zoom={this.state.zoom} onClick={this.addMarker} maxZoom={this.state.maxZoom}>
      <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
      {this.state.markers.map((position, idx) =>
        <Marker key={`marker-${idx}`} position={position}>
          <Popup>
            {/* this changes whatever is in the pop-up --v*/}
            <span>Number of Unique Users: {`${this.state.uniqueUsers}`}</span>
          </Popup>
        </Marker>
      )}
    </LeafletMap>
  );
}
}

export default Map
