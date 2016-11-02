import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    if (!this.get('loginService.isAuthenticated')) {
      this.transitionTo('login');
    }
  },
});
