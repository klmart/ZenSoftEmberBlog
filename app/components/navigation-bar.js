import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    logout: function() {
      this.set('loginService.isAuthenticated', false);
      window.location.reload(true);
    }
  }
});
