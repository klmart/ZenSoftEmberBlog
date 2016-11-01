import DS from 'ember-data';

import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),

  posts: DS.hasMany('post'),

  user: DS.belongsTo('user'),

  isValid: Ember.computed.notEmpty('name'),

  checkUser: Ember.computed(function () {
    if (this.get('loginService.currentUser.id') == this.get('user.id')) {
      return true
    } else {
      return false
    }
  })

});
