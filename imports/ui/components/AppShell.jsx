import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';

/*
  Composes cross-app compontents (e.g. a navbar) with an internal page.
*/

class AppShell extends Component {
  render () {
    return (
      <div className="app-shell">
        <NavBar />
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

export default AppShell;
