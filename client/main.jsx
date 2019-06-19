import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/routes';
import App from '/imports/ui/App'

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('react-target'));
});
