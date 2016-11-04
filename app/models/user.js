import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  lastLoginDate: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  registrationDate: DS.attr('string', {
    defaultValue(){
      return moment().format('ll');
    }
  }),

  blogs: DS.hasMany('blog'),
  posts: DS.hasMany('post'),
  comments: DS.hasMany('comment')

});
