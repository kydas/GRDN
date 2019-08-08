import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotificationsIndicator from './NotificationsIndicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faSearch, faHiking, faBell, faSignInAlt, faSignOutAlt, faQuestion } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import HoverTip from './HoverTip.jsx';
import {summonModalById} from '../actions/UIActions';
import {getCurrentUserNotifications} from '../actions/NotificationsActions';

/*
  Contains the app's main side navigation.
*/

const mapStateToProps = state => {
  return {
    userNotificationsCount: state.userNotificationsCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    summonModalById: (id) => {
      dispatch(summonModalById(id));
    },
    getUserNotifications: (userId) => {
      dispatch(getCurrentUserNotifications(userId));
    }
  }
}

class ConnectableNavBar extends Component {

  constructor(props) {
    super(props);

    if (this.props.user) {
      this.props.getUserNotifications(this.props.user._id);
    }
  }

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

          <Link to='/about'>
            <HoverTip text="About GRDN" hideDesktop />
            <FontAwesomeIcon icon={faQuestion}/>
            <label>About</label>
          </Link>






          <div className="notifications-holder">
            {user && false && //Currently hidden
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
              <NotificationsIndicator hide={this.props.userNotificationsCount == 0} count={this.props.userNotificationsCount} />
              <FontAwesomeIcon icon={faBell} />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

const NavBar = connect(mapStateToProps, mapDispatchToProps)(ConnectableNavBar);
export default NavBar;
