import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    login(userParams) {

      const {email, password} = this.getProperties('email', 'password');
      this.loginService.findUser(email, password)
          .then((user) => {
            this.loginService.userInit(user)
                .then(() => {
                  this.sendAction('action', userParams);
                });
          });
    }
  }
});
