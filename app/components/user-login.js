import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    login() {
      const  { email, pass } = this.getProperties('email', 'password');
    }

  }
});
