import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    login() {
      console.log('route user-login start');
      this.transitionTo('blogs');
    }
  }
});
