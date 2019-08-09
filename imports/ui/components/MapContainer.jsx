import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

export default class MapContainer extends Component {

  constructor(props) {
    super(props);


    this.state = {
        apiKey: null
    }

  }

  render() {
    let that = this;
    if (this.state.apiKey === null) {
      Meteor.call('googleMap.getApiKey', (err, res) => {
        that.setState({"apiKey": res});
      });
      return " ";
    }
    return (
      <div style={{ height: '600px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.state.apiKey}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapMarker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="My Marker"
            />
        </GoogleMapReact>
      </div>
    )
  }
}
