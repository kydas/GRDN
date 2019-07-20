import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import store from '../store/index';
import {Provider} from 'react-redux';
import ModalHolder from './ModalHolder';

/*
  Composes cross-app compontents (e.g. a navbar) with an internal page.
*/

class AppShellComponent extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="app-shell">
          <NavBar user={Meteor.userId()} />
          <ModalHolder />
          {this.props.children}

          <footer>
          </footer>
        </div>
      </Provider>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('users');
  return {
      user: Meteor.user()
  };
})(AppShellComponent);
