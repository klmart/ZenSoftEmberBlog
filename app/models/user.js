import DS from 'ember-data';
import moment from 'moment';


export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),

  lastLoginDate: DS.attr('date'),
  lastLoginMoment: Ember.computed('lastLoginDate', function () {
    return moment(this.get('lastLoginDate')).format('YYYY-MM-DD, HH:mm')
  }),

  registrationDate: DS.attr('date', {
    defaultValue(){
      return new Date();
    }
  }),
  registrationMoment: Ember.computed('registrationDate', function () {
    return moment(this.get('registrationDate')).format('YYYY-MM-DD HH:mm')
  }),

  blogsCount: Ember.computed(function () {
    return this.get('blogs.length');
  }),


  blogs: DS.hasMany('blog'),
  posts: DS.hasMany('post'),
  comments: DS.hasMany('comment'),

  checkUser: Ember.computed(function () {
    const answer = this.get('user.id') === this.get('loginService.currentUser.id');
    console.log(this.get('id'));
    console.log(this.get('loginService.currentUser.id'));
    console.log(answer);
  }),

});
