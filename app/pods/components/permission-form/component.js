import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    buttonClicked(permissionParams) {
      this.sendAction('action', permissionParams);
    }
  }
});