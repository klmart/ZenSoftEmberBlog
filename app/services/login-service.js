import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service('store'),
  currentUser: Ember.Object.create(),

  findUser(email, pass){

    this.get('store').findAll('user').then((users) => {
      users.forEach((user) => {
        if ((user.get('email') == email) && (user.get('password') == pass)) {
          this.set('currentUser', user);
        }
      })
    });

  }

});
