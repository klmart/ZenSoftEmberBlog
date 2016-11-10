import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    buttonClicked(roleParams) {
      this.sendAction('action', roleParams);
    }
  }
});
