import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),

  user: DS.belongsTo('user'),
  post: DS.belongsTo('post', { async: false }),

  checkUser: Ember.computed(function () {
    if(this.get('loginService.currentUser.id') == this.get('user.id')){
      return true
    } else {
      return false
    }
  })

});
