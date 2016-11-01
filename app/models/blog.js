import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  description: DS.attr('string'),

  posts: DS.hasMany('post'),

  user: DS.belongsTo('user'),

  isValid: Ember.computed.notEmpty('name'),


  // checkUser: Ember.computed.equal(this.get('loginService.currentUser.id'), this.get('user.id')),
  checkUser: Ember.computed(function () {
    return this.get('user.id') === this.get('loginService.currentUser.id')? true : false;
  })

});
