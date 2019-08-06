import React, {Component} from 'react';
import {createGarden} from '../actions/GardenActions';
import {connect} from 'react-redux';
import GoogleMapGeoPicker from 'react-geo-picker/lib/google-map';

const mapDispatchToProps = dispatch => {
    return {
      createGarden: (userId, gardenName, location, indoor) => dispatch(createGarden(userId, gardenName, location, indoor))
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
      mapApiKey: null,
      indoor: false
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
        <label>Garden Name:</label>
        <input type="text" onChange={this.handleGardenNameChange} />
        <label>Indoor:</label>
        <input type="checkbox" value={this.state.indoor} onChange={this.handleGardenIndoorChange} />
        <label>Location:</label>
        {this.state.mapApiKey &&
          <GoogleMapGeoPicker
            apiKey={this.state.mapApiKey}
            height={300}
            width={460}
            defaultValue={{
              latitude: 49.2581322,
              longitude: -123.2403414,
            }}
            value={this.state.location}
            onChange={(location) => this.setState({ location })}
          />
        }
        <div className="action-buttons">
          <button onClick={this.handleCreate} className="teal">Create!</button>
        </div>
      </form>
    )
  }

  handleGardenIndoorChange = (event) => {
    this.setState({
      indoor: event.target.checked
    })
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
      lng: ((this.state.location.longitude - 180.0) % 360.0) + 180.0
    }
    this.props.createGarden(Meteor.userId(), this.state.gardenName, location, this.state.indoor);
    this.props.dismiss();
  }


  setApiKey = (key) => {
    this.setState({mapApiKey: key});
  }

}

const CreateGardenForm = connect(null, mapDispatchToProps)(ConnectableCreateGardenForm);
export default CreateGardenForm;
