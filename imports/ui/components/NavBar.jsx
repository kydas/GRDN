import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotificationsIndicator from './NotificationsIndicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faSearch, faHiking, faBell, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import HoverTip from './HoverTip.jsx';

/*
  Contains the app's main side navigation.
*/

export default class NavBar extends Component {


  render() {
    let user = this.props.user;
    return (
      <nav>
        {user &&
          <Link to='/'>
            <HoverTip text="Your Gardens" />
            <FontAwesomeIcon icon={faSeedling} />
          </Link>
        }

        <Link to='/search'>
          <HoverTip text="Search Plants" />
          <FontAwesomeIcon icon={faSearch} />
        </Link>

        {user &&
              <Link to='/profile'>
                <HoverTip text="Your Profile" />
                <FontAwesomeIcon icon={faHiking} />
              </Link>
        }

        {user &&
              <Link to='/logout'>
                <HoverTip text="Log Out" />
                <FontAwesomeIcon icon={faSignInAlt} />
              </Link>
        }

        {!user  &&
            <Link to='/login'>
              <HoverTip text="Log in" />
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
        }

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
