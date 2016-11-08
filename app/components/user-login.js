import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    login(userParams) {

      const {email, password} = this.getProperties('email', 'password');
      this.loginService.findUser(email, password).then((user) => {
        this.loginService.setLastLoginDate(user);
        this.loginService.setCurrentUser(user);
      });

      //TODO: use action in params
      //Done
      this.sendAction('action', userParams);
    }
  }
});
