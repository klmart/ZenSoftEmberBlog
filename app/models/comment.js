import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),

  post: DS.belongsTo('post', {async: false}),
  users: DS.hasMany('user'),

  isValid: Ember.computed.notEmpty('body')

});
