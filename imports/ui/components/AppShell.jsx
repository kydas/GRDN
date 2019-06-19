import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';

/*
  Composes cross-app compontents (e.g. a navbar) with an internal page.
*/

class AppShellComponent extends Component {
  render () {
    return (
      <div className="app-shell">
        <NavBar user={Meteor.userId()} />
        <main>
          {this.props.children}
        </main>
        <footer>
          <hr/>
        </footer>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('users');
  return {
      user: Meteor.user()
  };
})(AppShellComponent);
