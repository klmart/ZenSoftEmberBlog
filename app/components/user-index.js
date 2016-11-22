import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  loginService: Ember.inject.service('login-service'),

  roles: Ember.computed(function () {
    return this.get('store').findAll('role');
  }),

  actions: {
    chooseRole(user, test, role){
      const selected = this.set('role', role);
      user.set('role', selected);
      user.save();
      //TODO: use then() after save
      this.get('loginService').setPermissions(user);
    }
  }
});
