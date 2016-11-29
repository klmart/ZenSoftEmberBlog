import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title:   DS.attr('string'),
  content: DS.attr('string'),

  user:     DS.belongsTo('user'),
  blog:     DS.belongsTo('blog', {async: false}),
  comments: DS.hasMany('comment'),

  checkUser: Ember.computed(function () {
    return this.get('user.id') === this.get('loginService.currentUser.id');
  })

});
