import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotificationsIndicator from './NotificationsIndicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faSearch, faHiking, faBell } from '@fortawesome/free-solid-svg-icons';

export default class NavBar extends Component {

  render() {
    return (
      <nav>
        <Link to='/'>
          <FontAwesomeIcon icon={faSeedling} />
        </Link>
        <Link to='/search'>
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        <Link to='/profile'>
          <FontAwesomeIcon icon={faHiking} />
        </Link>
        <hr/>
        <div className="notifications-holder">
          <Link to='/notifications'>
            <NotificationsIndicator count="2" />
            <FontAwesomeIcon icon={faBell} />
          </Link>
        </div>
      </nav>
    )
  }
}
