import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    login() {

      const  { email, password } = this.getProperties('email', 'password');
      this.loginService.findUser(email, password).then((user) =>{
        this.loginService.setCurrentUser(user);
      });

      //TODO: use action in params
      this.sendAction();

    }

}
});
