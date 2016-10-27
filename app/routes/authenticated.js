import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    console.log('--------Main route-----------');
    if (!this.get('loginService.isAuthenticated')) {
      this.transitionTo('login');
    }
  },
});
