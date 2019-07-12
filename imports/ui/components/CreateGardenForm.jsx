import React, {Component} from 'react';
import {createGarden} from '../actions/GardenActions';
import {connect} from 'react-redux';
import GoogleMapGeoPicker from 'react-geo-picker/lib/google-map';

const mapDispatchToProps = dispatch => {
    return {
      createGarden: (userId, gardenName, location) => dispatch(createGarden(userId, gardenName, location))
    }
}

class ConnectableCreateGardenForm extends Component {

//Guards against frontend warning about setting state in unmounted components when redirected to login page.
  _mounted = false;

  constructor(props) {
    super(props);

    this.state = {
      gardenName: "",
      location: {
        latitude: 49.2581322,
        longitude: -123.2403414,
      },
      mapApiKey: null
    }


  }

  componentDidMount() {
    this._mounted = true;
    if (this.state.mapApiKey === null) {
      let that = this;
      Meteor.call('googleMap.getApiKey', (err, res) => {
        if (this._mounted) {
          this.setApiKey(res);
        }
      });
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    return (
      <form className="gardenForm">
        Name: <input type="text" onChange={this.handleGardenNameChange} />
        {this.state.mapApiKey &&
          <GoogleMapGeoPicker
            apiKey={this.state.mapApiKey}
            height={300}
            width={400}
            defaultValue={{
              latitude: 49.2581322,
              longitude: -123.2403414,
            }}
            value={this.state.location}
            onChange={(location) => this.setState({ location })}
          />
        }

        <button onClick={this.handleCreate}>Create!</button>
      </form>
    )
  }

  handleGardenNameChange = (event) => {
    this.setState({
      gardenName: event.target.value
    })
  }


  handleCreate = (event) => {
    event.preventDefault();
    let location = {
      lat: this.state.location.latitude,
      lng: this.state.location.longitude
    }
    this.props.createGarden(Meteor.userId(), this.state.gardenName, location);
  }


  setApiKey = (key) => {
    this.setState({mapApiKey: key});
  }

}

const CreateGardenForm = connect(null, mapDispatchToProps)(ConnectableCreateGardenForm);
export default CreateGardenForm;
