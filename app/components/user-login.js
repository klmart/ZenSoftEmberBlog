import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    login() {

      const  { email, password } = this.getProperties('email', 'password');

      // console.log(this.get('currentUser.test_user'));
      // this.get('currentUser.testUser').set('email', email);
      // this.get('loginService.currentUser').set('email', email);

      this.loginService.findUser(email, password);
      console.log('2222222222222222222222222222');

      this.sendAction();
    }

}
});
