import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service('store'),
  currentUser: Ember.Object.create(),
  isAuthenticated: Ember.computed('currentUser.id', function () {
    return !!this.get('currentUser.id');
  }),

  findUser(email, pass){
    return this.get('store').query('user', {
       email: email, password: pass }).then(function(users){
      return users.get('lastObject');
    });
  },

  setCurrentUser(user){
    this.set('currentUser', user);
  },

  setLastLoginDate(user){
    user.set('lastLoginDate', new Date());
    user.save();
  }

});
