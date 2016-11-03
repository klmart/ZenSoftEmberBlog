import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  name: DS.attr('string'),
  description: DS.attr('string'),

  blogType: DS.belongsTo('blog-type'),

  posts: DS.hasMany('post', { async: false }),

  user: DS.belongsTo('user'),

  // isValid: Ember.computed.notEmpty('name'),

  //checkUser: Ember.computed.equal(this.get('loginService.currentUser.id'), this.get('user.id')),

  checkUser: Ember.computed(function () {
    return this.get('user.id') === this.get('loginService.currentUser.id')? true : false;
  })

});
