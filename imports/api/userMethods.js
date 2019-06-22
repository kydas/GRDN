/*
Handles user methods.
*/

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  newUser: (username, email, password) => {
    Accounts.createUser({
      username: username,
      email: email,
      password: password
    });
  }

});
