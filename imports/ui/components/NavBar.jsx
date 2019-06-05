import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotificationsIndicator from './NotificationsIndicator';

export default class NavBar extends Component {

  render() {
    return (
      <nav>
        <Link to='/'>Gardens</Link>
        <Link to='/search'>Database</Link>
        <Link to='/tp2/123'>Profile</Link>
        <hr/>
        <div className="notifications-holder">
          <Link to='/tp2/123'>Notifications
            <NotificationsIndicator count="2" />
          </Link>
        </div>
      </nav>
    )
  }
}
