import React, { Component } from 'react'
import Methods from '../../api/userMethods'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import LoginForm from '../components/LoginForm'
import NewUserForm from '../components/NewUserForm'

/*
Displays a user's profile. If it's the current user, they can make changes.
*/

export default class LoginPage extends Component {

  render() {
      return (
        <div>
          <LoginForm />
          <NewUserForm />
        </div>
      )



  }

}
