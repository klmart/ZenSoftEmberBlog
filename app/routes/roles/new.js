import Ember from 'ember';

export default Ember.Route.extend({
  // model(){
  //   return this.store.createRecord('role')
  // },

  actions: {
    saveRole(newRole){
      newRole.save().then(() => {this.transitionTo('roles');
      });
    },

    //TODO: now the new role doesn't removed from store
    willTransition() {
      // this.controller.get('model').unloadRecord();
    }
  }
});
