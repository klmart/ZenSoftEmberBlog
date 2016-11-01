import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  body: DS.attr('string'),

  user: DS.belongsTo('user'),
  post: DS.belongsTo('post', { async: false }),

  checkUser: Ember.computed(function () {
    return this.get('user.id') === this.get('loginService.currentUser.id')? true : false;
  })

});
