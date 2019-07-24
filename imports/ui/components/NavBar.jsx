import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotificationsIndicator from './NotificationsIndicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faSearch, faHiking, faBell, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import HoverTip from './HoverTip.jsx';
import {summonModalById} from '../actions/UIActions';

/*
  Contains the app's main side navigation.
*/

const mapDispatchToProps = dispatch => {
  return {
    summonModalById: (id) => {
      dispatch(summonModalById(id));
    }
  }
}

class ConnectableNavBar extends Component {


  render() {
    let user = this.props.user;
    return (
      <nav>
        <div className="container">
          {user &&
            <Link to='/'>
              <HoverTip text="Your Gardens" hideDesktop="true"/>
              <FontAwesomeIcon icon={faSeedling} />
              <label>Gardens</label>
            </Link>
          }

          <Link to='/search'>
            <HoverTip text="Search Plants" hideDesktop="true" />
            <FontAwesomeIcon icon={faSearch} />
            <label>Search</label>
          </Link>





          <div className="notifications-holder">
            {user &&
                  <Link to='/profile'>
                    <HoverTip text="Your Profile" />
                    <FontAwesomeIcon icon={faHiking} />
                  </Link>
            }
            {user &&
                  <a onClick={()=>{this.props.summonModalById("LOGOUT")}}>
                    <HoverTip text="Log Out" />
                    <FontAwesomeIcon icon={faSignInAlt} />
                  </a>
            }

            {!user  &&
                <a onClick={()=>{this.props.summonModalById("LOGIN")}}>
                  <HoverTip text="Log in" />
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </a>
            }
            <a onClick={()=>{this.props.summonModalById("NOTIFICATIONS")}}>
              <HoverTip text="Notifications" />
              <NotificationsIndicator count="2" />
              <FontAwesomeIcon icon={faBell} />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

const NavBar = connect(null, mapDispatchToProps)(ConnectableNavBar);
export default NavBar;
