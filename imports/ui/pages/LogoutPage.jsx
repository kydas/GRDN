import React, { Component } from 'react'
import Methods from '../../api/userMethods'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import LogoutButton from '../components/LogoutButton'
/*
Displays a user's profile. If it's the current user, they can make changes.
*/

export default class LogoutPage extends Component {

  render() {
      return <LogoutButton />



  }

}
