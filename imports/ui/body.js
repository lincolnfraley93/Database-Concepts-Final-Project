import { Template } from 'meteor/templating';

import { Students } from '../api/students.js';

import './body.html';
import './students.js';
 
Template.body.helpers({
  students() {
      return Students.find({});
  }
});

Template.body.events({
    'submit .new-student': function(event){
        event.preventDefault();
        const name = event.target.name.value;
        const major = event.target.major.value;
        
        if (major=="computer science") {
            Students.insert({
              studentName: name,
              studentMajor: major,
              createdAt: new Date()
            });
        } else {
            Students.insert({
                studentName: name,
                studentMajor: major
            });
        }
        
        event.target.name.value="";
        event.target.major.value="";
    }
});