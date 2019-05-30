// Composes cross-app compontents (e.g. a navbar) with an internal page.

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AppShell extends Component {
  render () {
    return (
      <div>
        <nav>
          I'm a navbar.
          <Link to='/'>Home </Link>
          <Link to='/tp2/123'>123 </Link>
          <hr/>
        </nav>
        {this.props.children}
        <footer><hr/>I'm the footer. Anything to be rendered after the page content goes here.</footer>
      </div>
    );
  }
}

export default AppShell;
