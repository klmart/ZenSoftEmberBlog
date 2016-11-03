import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({

  name: DS.attr('string'),
  description: DS.attr('string'),

  createdDate: DS.attr('string', {
    defaultValue() {
      // return new Date()
      return moment().format('ll');
    }
  }),

  blogType: DS.belongsTo('blog-type'),

  posts: DS.hasMany('post'),

  user: DS.belongsTo('user'),

  postsCount: Ember.computed(function () {
    return this.get('posts.length');
  }),

  isValid: Ember.computed.notEmpty('name'),

  //checkUser: Ember.computed.equal(this.get('loginService.currentUser.id'), this.get('user.id')),
  //TODO: refactor
  checkUser: Ember.computed(function () {
    return this.get('user.id') === this.get('loginService.currentUser.id');

  })

});
