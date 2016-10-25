import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),

  posts: DS.hasMany('post'),
  users: DS.hasMany('user'),

  isValid: Ember.computed.notEmpty('name')

});
