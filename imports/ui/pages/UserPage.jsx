import React, { Component } from 'react'
import Methods from '../../api/userMethods'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import LoginForm from '../components/LoginForm'
/*
Displays a user's profile. If it's the current user, they can make changes.
*/

export default class UserPage extends Component {

  render() {
    let user = Meteor.user();
    if (user === undefined) {
      return <LoginForm />
    } else {
      let username = user.username;
      let email = user.emails[0].address;

      return (
          <div>
            <img src="/media/profile-picture-placeholder.jpg" />
            <h1>{username}</h1>
            <p><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
          </div>
      );
    }

  }

}
