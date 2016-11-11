import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  roles: Ember.computed(function () {
    return this.get('store').findAll('role')
  }),

  actions: {
    chooseRole(user, test, role){
      const selected = this.set('role', role);
      user.set('role', selected);
      console.log(user.get('role.name'));
      user.save();
    }
  }
});
