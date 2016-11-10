import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  role: undefined,

  permissions: Ember.computed(function () {
    return this.get('store').findAll('permission')
  }),

  init(){
    this._super(...arguments);

    const roleFromRoute = this.get('item') || this.get('store').createRecord('role');
    this.set('role', roleFromRoute);
  },

  actions: {
    //TODO: Remake to multiple select
    choosePermission(permission){
      const selected = this.set('permission', permission);
      this.get('role.permissions').pushObject(selected);
    },

    buttonClicked(roleParams) {
      this.sendAction('action', roleParams);
    }
  }
});
