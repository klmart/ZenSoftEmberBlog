import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('permission');
  },

  actions: {
    savePermission(newPermission){
      newPermission.save().then(()=> { this.transitionTo('permissions')});
    },
    willTransition(){
      this.controller.get('model').unloadRecord();
    }
  }
});
