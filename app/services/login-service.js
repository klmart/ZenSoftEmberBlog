import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service('store'),
  currentUser: Ember.Object.create(),
  currentPermissions: undefined,

  isAuthenticated: Ember.computed('currentUser.id', function () {
    return !!this.get('currentUser.id');
  }),

  findUser(email, pass){
    return this.get('store').query('user', {
      email: email, password: pass
    }).then(function (users) {
      return users.get('lastObject');
    });
  },

  userInit(user){
    this.setCurrentUser(user);
    this.setLastLoginDate(user);
    return this.setPermissions(user);
  },

  setCurrentUser(user){
    this.set('currentUser', user);
  },

  setLastLoginDate(user){
    user.set('lastLoginDate', new Date());
    user.save();
  },

  setPermissions(user){
    const th = this;
    return new Promise(function (resolve) {
      //TODO: what will be if the new user is just created?
      return user.get('role.permissions').then((permissions) => {
        th.set('currentPermissions', permissions);
        resolve();
      });
    });
  }

});
