import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  user: undefined,

  roles: Ember.computed(function () {
    return this.get('store').findAll('role');
  }),

  init(){
    this._super(...arguments);
    const userFromRoute = this.get('item') || this.get('store').createRecord('user');
    this.set('user', userFromRoute);
  },

  actions: {
    chooseRole(role){
      const selected = this.set('role', role);
      this.get('user').set('role', selected);
    },

    buttonClicked(userParams) {
      console.log(userParams.get('firstName'));
      this.sendAction('action', userParams);
    }
  }
});
