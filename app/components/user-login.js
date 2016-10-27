import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    login() {

      const  { email, password } = this.getProperties('email', 'password');

      console.log('Запускаю findUser, чтобы найти юзера из базы');
      this.loginService.findUser(email, password).then((user) =>{
        this.loginService.setCurrentUser(user);
        console.log('Проверь email');
        console.log(this.get('loginService.currentUser.email'));
      });

      console.log('Должен появться после findUser');
      this.sendAction();

    }

}
});
