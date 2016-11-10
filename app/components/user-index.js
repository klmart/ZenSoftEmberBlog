import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  roles: Ember.computed(function () {
    return this.get('store').findAll('role')
  }),

  actions: {
    //TODO: Сделать как надо
    chooseRole(role){
      const selected = this.set('role', role);
      console.log(user);
      // user.set('role', role);
      // user.save().then((user) => {
      //   user.set('role', role);
      // });
      // console.log(user.get('role.name'));
      // // console.log(user.get(role).get('name'));
      // this.get('role.permissions').pushObject(selected);
    }
  }
});
