import { Template } from 'meteor/templating';
 
import { Students } from '../api/students.js';
 
import './students.html';
 
Template.students.events({
  'click .toggle-checked'() {
    Students.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Students.remove(this._id);
  },
});