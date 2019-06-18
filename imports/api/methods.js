import { Meteor } from 'meteor/meteor';

Meteor.methods({
  test: function (values) {
    console.log("Test");
    return "aaa";
  }
});
