import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotificationsIndicator from './NotificationsIndicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faSearch, faHiking, faBell } from '@fortawesome/free-solid-svg-icons';

import HoverTip from './HoverTip.jsx';

/*
  Contains the app's main side navigation.
*/

export default class NavBar extends Component {

  render() {
    return (
      <nav>
        <Link to='/'>
          <HoverTip text="Your Gardens" />
          <FontAwesomeIcon icon={faSeedling} />
        </Link>
        <Link to='/search'>
          <HoverTip text="Search Plants" />
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        <Link to='/profile'>
          <HoverTip text="Your Profile" />
          <FontAwesomeIcon icon={faHiking} />
        </Link>
        <hr/>
        <div className="notifications-holder">
          <Link to='/notifications'>
            <HoverTip text="Notifications" />
            <NotificationsIndicator count="2" />
            <FontAwesomeIcon icon={faBell} />
          </Link>
        </div>
      </nav>
    )
  }
}
