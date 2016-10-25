import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),

  blog: DS.belongsTo('blog', {async: false}),
  comments: DS.hasMany('comment'),
  users: DS.hasMany('user'),

  isValid: Ember.computed.notEmpty('title')

});
