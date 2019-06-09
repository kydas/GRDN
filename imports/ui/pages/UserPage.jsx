import React, { Component } from 'react';
import Methods from '../../api/userMethods';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faEnvelope } from '@fortawesome/free-solid-svg-icons';
/*
Displays a user's profile. If it's the current user, they can make changes.
*/

export default class UserPage extends Component {
  state = {
    user: null
  }

  componentWillMount() {
    var that = this;
    Meteor.call('getUser', "VictorHeck", function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        that.setState({user: res})
      }
    });
  }

  render() {
    if (this.state.user === null) {
      return ("Loading");
    } else {
      let user = this.state.user;
      let username = user.username;
      let email = user.email;
      let birthday = new Date();
      birthday.setTime(user.birthday);

      return (
          <div>
            <img src="/media/profile-picture-placeholder.jpg" />
            <h1>{username}</h1>
            <p><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
            <p><FontAwesomeIcon icon={faBirthdayCake} />{birthday.toLocaleDateString()}</p>
          </div>
      );
    }

  }

}
