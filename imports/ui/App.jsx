import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';

const App = props => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
    {props.content}
  </div>
);

export default App;
