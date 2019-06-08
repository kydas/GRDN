// Composes cross-app compontents (e.g. a navbar) with an internal page.

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';

class AppShell extends Component {
  render () {
    return (
      <div className="app-shell">
        <NavBar />
        <main>
          {this.props.children}
        </main>
        <footer>
          //Temporary. Replace witj a footer component etc.
          <hr/>
          I'm the footer. Anything to be rendered after the page content goes here.
        </footer>
      </div>
    );
  }
}

export default AppShell;
