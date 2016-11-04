import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service('store'),
  currentUser: Ember.Object.create(),
  // isAuthenticated: Ember.computed('currentUser.id', function () {
  //   return !!this.get('currentUser.id');
  // }),
  isAuthenticated: false,

  findUser(email, pass){

    return this.get('store').query('user', {
       email: email, password: pass }).then(function(users){
      return users.get('lastObject');
    });
  },

  setCurrentUser(user){
    this.set('currentUser', user);
    this.set('isAuthenticated', true);
  },

  setLastLoginDate(user){
    console.log('-----setLastLoginDate------------');
    const dateNow = new Date();
    // console.log(dateNow);
    user.set('lastLoginDate', dateNow);
    user.save();
    console.log(user.get('lastLoginDate'));
    console.log(user.get('lastLoginMoment'));
  }

});
