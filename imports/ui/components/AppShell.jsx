import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

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

export const AppShell = createContainer(() => {
  Meteor.subscribe('users');
  return {
      user: Meteor.user()
  };
}, AppShellComponent);

export default AppShell;
