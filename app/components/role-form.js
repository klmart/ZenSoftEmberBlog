import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  role:  undefined,

  permissions: Ember.computed(function () {
    return this.get('store')
               .findAll('permission');
  }),

  init(){
    this._super(...arguments);

    const roleFromRoute = this.get('item') || this.get('store')
                                                  .createRecord('role');
    this.set('role', roleFromRoute);
  },

  willDestroyElement(){
    this.get('role')
        .rollbackAttributes();
  },

  actions: {

    choosePermission(ignore, permissionsArray){
      const selected = this.set('permission', permissionsArray);
      this.set('role.permissions', selected);
    },

    buttonClicked(roleParams) {
      this.sendAction('action', roleParams);
    }
  }
});
