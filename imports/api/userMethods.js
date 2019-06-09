/*
Handles user methods.
*/

import { Meteor } from 'meteor/meteor';


/*
DUMMY DATA: Delete when we have a db
*/
var users = [
  {
    username: "VictorHeck",
    email: "vicheck@hotmail.com",
    password: "password123",
    birthday: -470534400
  },
  {
    username: "AllisonNyongo",
    email: "nyongo@mail.interchange.ru",
    password: "walnut",
    birthday: -270534400
  }
]

Meteor.methods({
  getAllUsers: () => {
    return users;
  },
  getUser: (id) => {
    return users.find((el) => el.username === id);
  }

});
